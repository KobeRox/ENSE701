import React, { useEffect, useState} from 'react';
import { getTrailingCommentRanges } from 'typescript';

const Trees = () => {

    // sets the states for the chosen things
    const [trees, setTrees] = useState('');
    const [search, setSearch] = useState('');

    // updates the search bar with user input and finds the user input
    const updateSearch = e => { 
        setSearch(e.target.value);
    }

    // sets the user input to the query 
    // Enables the user to type in the search bar
    const getSearch = e => {
        e.preventDefault();
        setSearch('');
    }

    const getRecipes = () => {
        //TODO: get tree details from somewhere, details such as name, description, prices

    }

    return (
        // search bar for the tree list
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>

            <div> 
                <h1>Tree Name goes here</h1>
                <p>Tree Description goes here</p>
                <p>Tree Price goes here</p>
            </div>
        </div>
    );
}

export default Trees;