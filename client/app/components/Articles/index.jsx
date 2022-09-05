import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from '../Shared/Loader/index.jsx';

const Articles = () => {

    const selectedSources = (window.localStorage.selectedSources ?? "hacker-news,product-hunt,techcrunch").split(",");
    const sources = [
        { sourceType: "hacker-news", sourceLabel: "Hacker News", color: "#FF6600" },
        { sourceType: "product-hunt", sourceLabel: "Product Hunt", color: "#DA552E" },
        { sourceType: "designer-news", sourceLabel: "Designer News", color: "#2D72D9" },
        { sourceType: "techcrunch", sourceLabel: "TechCrunch", color: "#0A9A03" },
        { sourceType: "dev-to", sourceLabel: "Dev Community", color: "#000000", darkModeColor: "#ffffff" },
        { sourceType: "the-next-web", sourceLabel: "The Next Web", color: "#F84221" },
        { sourceType: "medium-technology", sourceLabel: "Medium (Technology)", color: "#2A2A2A", darkModeColor: "#ffffff" },
        { sourceType: "smashing-magazine", sourceLabel: "Smashing Magazine", color: "#CE392B" },
        { sourceType: "engadget", sourceLabel: "Engadget", color: "#2B2D33", darkModeColor: "#ffffff" },
        { sourceType: "the-verge", sourceLabel: "The Verge", color: "#E1127A" },
        { sourceType: "wired", sourceLabel: "Wired", color: "#000000", darkModeColor: "#ffffff" },
    ];
    const [loading, setLoading] = useState(true);
    const [articlesList, setArticles] = useState([]);
    

    useEffect(() => {
        fetchArticles();
    }, [])

    const fetchArticles = () => {
        setLoading(true);
        axios.get(`/api/?sources=${selectedSources.join(",")}`).then((response) => {
            const { items } = response.data;
            console.log("items===>", items)
            setArticles(items);
            // this.articles = items;
            // this.loading = false;
            // this.showAll = false;
            setLoading(false);
        });
    };

    const getTextColor = (sourceType) => {
        return sources.find((s) => s.sourceType === sourceType).color;
    }

    const formatDate = (dateString) => {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + "Y";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + "M";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + "d";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + "h";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + "m";
        return "now";
    },

    return (
        <section >
            {loading ? 
                <Loader />
            : <div>Data Loaded</div>}
            {articlesList.map((item, i) => {
                return (
                    <article key={i}>
                        <div class="row">
                            <a href={item.url} target="_blank" class="title">{item.title}</a>
                            <div class="meta small light">
                                <span styles={{'color': getTextColor(item.sourceType)}}>{item.sourceLabel}</span>
                                { item.author && <span >{item.author}</span> }
                                <span>{formatDate(item.date)}</span>
                            </div>
                        </div>
                    </article>
                )
            })}
            {/* <article v-for="(article, i) in articles" v-bind:key="i">
                <div class="row" v-if="i < 50 || showAll">
                    <a v-bind:href="article.url" target="_blank" class="title" v-html="article.title"></a>
                    <div class="meta small light">
                        <span v-bind:style="'color:'+ getTextColor(article.sourceType)">{{article.sourceLabel}}</span>
                        <span v-if="article.author" v-html="article.author"></span>
                        <span>{{formatDate(article.date)}}</span>
                    </div>
                </div>
            </article>
            <a href="javascript:void(0)" id="loadmore" v-if="showAllButton" v-on:click="showAll = true">
                SHOW ALL &darr;
            </a> */}
        </section>
    )
}

export default Articles;