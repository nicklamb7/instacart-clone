import React from 'react';
import './FeaturedStores.css';

function FeaturedStores({ sectionTitle, image1, image2, image3, image4, image5, image6, image7, image8, image9, title1, title2, title3, title4, title5, title6, title7, title8, title9}) {
    return (
        <div className="featured-stores">
            <h1>{sectionTitle}</h1>
            <ul>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image1} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title1}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image2} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title2}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image3} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title3}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                        <img className="" src={image4} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title4}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image5} alt="" />                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title5}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image6} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title6}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image7} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title7}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image8} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title8}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
                <li>
                    <button>
                        <div className="featured-stores__image">
                            <img className="" src={image9} alt="" />
                        </div>
                        <div className="featured-stores__right-container">
                            <div className="featured-stores__small-text">
                                <small>NEW</small>
                            </div>
                            <div className="featured-stores__text">
                                {title9}
                            </div>
                            <div className="featured-stores__bottom-text">
                                In-store prices
                            </div>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FeaturedStores
