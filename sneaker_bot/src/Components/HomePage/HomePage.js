import React from 'react';
import style from './HomePage.css';
//import Profile from '../Profile/Profile';
import SearchBar from '../ProductSearch/SearchBar';
import { InfoCard } from '../InfoCard/InfoCard';


export default class HomePage extends React.Component {
//     constructor(props) {
//     super(props);
// }
render() {
    return (
        <div>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <section className='RecentSearches'>
                <h2>Recent Searches</h2>
                <div className='InfoCards'>
                    <InfoCard />
                </div>
                <h2>Suggested For You</h2>
                <div className='InfoCards'>
                    <InfoCard />
                </div>
            </section>
            {/* <div className='ProfileLogo'>
                <Profile />
            </div> */}
        </div>
    );
}
}