import React from "react";

const ArticleList = ({data, actions, showAll}) => {
    var list = [];
    console.log("ArticleList showAll", showAll)
    data && data.forEach((item, i) => {
        list.push(
            <article key={i}>
                {(i < 50 || showAll) && <div class="row">
                    <a href={item.url} target="_blank" class="title">{item.title}</a>
                    <div class="meta small light">
                        <span styles={{'color': actions.getTextColor(item.sourceType)}}>{item.sourceLabel}</span>
                        { item.author && <span >{item.author}</span> }
                        <span>{actions.formatDate(item.date)}</span>
                    </div>
                </div> }
            </article>
        )
    })
    return list;
}

export default ArticleList;