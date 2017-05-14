import React, { Component } from 'react';

class SearchBar extends Component {
    //Create the state using cunstructor metho
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    } 

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
    //Render JSX
    render() {
        return ( 
            <div className="search-bar">
                <input 
                    value={this.state.value}
                    onChange={event => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    }
}

export default SearchBar;