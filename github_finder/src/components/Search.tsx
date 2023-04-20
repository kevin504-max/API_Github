import React from 'react'

import { BsSearch } from 'react-icons/bs'

const Search = () => {
    return (
        <div>
            <h2>Search for an user:</h2>
            <p>Know your main repositories</p>
            <div>
                <input type="text" placeholder="Enter with a name..." />
                <button>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
};

export default Search;