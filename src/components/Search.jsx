import React from 'react';
import { useState } from 'react';

const Search = ({ setPosts, postData, setQuery, query }) => {


    const handleQuery = (e) => {
        setQuery(e.target.value)
        setPosts(postData.filter((post) => post.location.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    const clearQuery = () => {
        setQuery("")
        setPosts(postData)
    }
    return (
        <div>
            <form>
                <label>Search posts by location...</label>
                <input type="text" value={query} onChange={handleQuery}/>
                <button onClick={clearQuery}>Cancel</button>
            </form>
        </div>
    );
}

export default Search;
