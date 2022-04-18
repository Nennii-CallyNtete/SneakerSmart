import React from 'react';
import style from './InfoCard.css';
import SearchBar from '../ProductSearch/SearchBar';

export const InfoCard = () => {
    let shoeName = 'Shoe Name';
    let shoeImage = "./jordan1.webp"
    let shoePrice = '$100';
    return (
        <div className='Card-Container'>
            <div className='Card-img'>
                <img src= {require("./jordan1.webp")} alt="sneakerimg" width={100} height={'auto'} />
            </div>
            <div className='Card-text'>
                <h3>{shoeName}</h3>
                <div className='Card-prices'>
                    <div className='Price-section'>
                        <a href=''>
                        <img src="https://seekvectorlogo.net/wp-content/uploads/2019/06/stockx-vector-logo.png"  width={35} height={'auto'} alt='stockx'/>
                        </a>
                        <p>{shoePrice}</p>
                    </div>
                    <div className='Price-section'>
                        <a href=''>
                        <img src={require("./flightclub.png")} width={35} height={'auto'} alt='flight-club'/>
                        </a>
                        <p>{shoePrice}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}