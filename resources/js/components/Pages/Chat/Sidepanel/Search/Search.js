import React from 'react';

const Search = () => {
    return (
        <div id="search">
            <label htmlFor="">
                <i className="fa fa-search" aria-hidden="true" />
            </label>
            <input type="text" placeholder="Search contacts..." />
        </div>
    );
};

export default Search;
