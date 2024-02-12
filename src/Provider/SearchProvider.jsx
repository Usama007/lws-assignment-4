import { useState } from "react";
import { SearchContext } from "../Context";

const SearchProvider = ({ children }) => {
    const [searchedText, setsearchedText] = useState(null);
    return (
        <SearchContext.Provider
            value={{ searchedText, setsearchedText }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;
