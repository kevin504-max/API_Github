type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyBoardEvent } from 'react'

import { BsSearch } from 'react-icons/bs'

import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('');
    const handleKeyDown = (event: KeyBoardEvent) => {
        if (event.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className={classes.search}>
            <h2>Search for an user:</h2>
            <p>Know your main repositories</p>
            <div className={classes.search_container}>
                <input 
                    type="text" 
                    placeholder="Enter with a name..." 
                    onChange={(event) => setUserName(event.target.value)} 
                    onKeyDown={handleKeyDown}
                />    
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
};

export default Search;