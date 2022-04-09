import React from 'react';
import style from './HomePage.css';
import Profile from '../Profile/Profile';
import SearchBar from '../ProductSearch/SearchBar';
import { InfoCard } from '../InfoCard/InfoCard';

export const HomePage = () => {
    return (
        <div>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <section className='RecentSearches'>
                <h2>Recent Searches</h2>
                <div>
                    <InfoCard />
                </div>
            </section>
            <div className='ProfileLogo'>
                <Profile />
            </div>
        </div>
    );
}