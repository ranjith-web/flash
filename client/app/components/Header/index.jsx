import React from "react";
import LightningIcon from '../Icons/lightning.jsx';

const Header = () => {
    return (
        <header className="row">
            <div className="flex">
                <div id="page-title" className="flex-1 bold">Flash</div>
                <div id="page-title" className="flex-1 bold">&nbsp;</div>
                <button id="lightning">
                    <LightningIcon />
                </button>
            </div>
            <div className="light">
                Read all your tech news (TechCrunch, Hacker News, Product Hunt and many more) in one place.
            </div>
        </header>
    )
}

export default Header;