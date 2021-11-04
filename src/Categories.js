import React from 'react';
import './Categories.css';

function Categories({ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11 }) {
    return (
        <div className="categories">
            <ul>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image1} alt="" />
                        Pickup
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image2} alt="" />
                        Grocery
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                    <img className="categories__image" src={image3} alt="" />
                        Convenience
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image4} alt="" />
                        Alcohol
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image5} alt="" />
                        In-store prices
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image6} alt="" />
                        EBT
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image7} alt="" />
                        Bulk
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image8} alt="" />
                        Retail
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image9} alt="" />
                        Pharmacy
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image10} alt="" />
                        Pets
                    </button>
                </li>
                <li>
                    <button className="categories__button">
                        <img className="categories__image" src={image11} alt="" />
                        New
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Categories
