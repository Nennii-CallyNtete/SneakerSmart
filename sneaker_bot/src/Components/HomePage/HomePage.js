import React from 'react';
import style from './HomePage.css';
import Profile from '../Profile/Profile';
import SearchBar from '../ProductSearch/SearchBar';

export const HomePage = () => {
    return (
        <div>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='ProfileLogo'>
                <Profile />
            </div>
        </div>
    );
}