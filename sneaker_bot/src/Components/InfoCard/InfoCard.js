import React from 'react';
import style from './InfoCard.css';
import SearchBar from '../ProductSearch/SearchBar';

export const InfoCard = () => {
    return (
        <div className='Card-Container'>
            <div className='Card-img'>
                <img src= {require("./jordan1.webp")} alt="sneakerimg" width={120} height={'auto'} />
            </div>
            <div className='Card-text'>
                <h3>Shoe Name Here</h3>
            </div>
        </div>
    )}