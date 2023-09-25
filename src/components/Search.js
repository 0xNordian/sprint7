import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchText(value);
        onSearch(value); // Call the onSearch callback with the search text
    };
    return (_jsx(_Fragment, { children: _jsx("input", { type: "text", placeholder: "Search budget...", value: searchText, onChange: handleInputChange }) }));
};
export default Search;
