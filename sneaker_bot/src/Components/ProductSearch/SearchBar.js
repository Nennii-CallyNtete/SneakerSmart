import React from 'react';
import style from './SearchBar.css';


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        searchTerm: '',
        size: '',
        recents: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
        this.setState({ size: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);
        let search = this.state.searchTerm;
        this.setState({recents: [...this.state.recents, search]});
    }

    fetchSearch() {
        fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                search: this.state.searchTerm,
                size: this.state.size
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }
    
    render() {
        return (
        <form className={style.searchBar} onSubmit={this.handleSubmit} id='SearchArea' required>
            <input
            id='search'
            type="text"
            placeholder="Search for a product"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
            <select name='size-select' id='size' form='SearchArea' onChange={this.handleChange} required >
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
            </select>
            <button id='search-button' type="submit">Search</button>
        </form>
        );
    }
}