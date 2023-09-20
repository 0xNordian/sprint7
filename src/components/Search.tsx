import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchText(value);
        onSearch(value); // Call the onSearch callback with the search text
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search budget..."
                value={searchText}
                onChange={handleInputChange}
            />
        </>
    );
};

export default Search;