import React from 'react';
import style from './SearchBar.css';


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        searchTerm: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }
    
    render() {
        return (
        <form className={style.searchBar} onSubmit={this.handleSubmit}>
            <input
            id='search'
            type="text"
            placeholder="Search for a product"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
            <button id='search-button' type="submit">Search</button>
        </form>
        );
    }
}