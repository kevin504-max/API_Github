type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

import { useState } from 'react'

import { BsSearch } from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('');
    
    return (
        <div>
            <h2>Search for an user:</h2>
            <p>Know your main repositories</p>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter with a name..." 
                    onChange={(event) => setUserName(event.target.value)} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
};

export default Search;