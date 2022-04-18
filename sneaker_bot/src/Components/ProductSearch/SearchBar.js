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
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleTextChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSizeChange(event) {
        this.setState({ size: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let search = this.state.searchTerm;
        let size = this.state.size;
        this.setState({recents: [...this.state.recents, [search, size]]});
        fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search: this.state.searchTerm,
            size: this.state.size
        })
        })
        .then(res => res.text())
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
            onChange={this.handleTextChange}
            />
            <select name='size-select' value={this.state.size} onChange={this.handleSizeChange} id='size' form= 'SearchArea' required >
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