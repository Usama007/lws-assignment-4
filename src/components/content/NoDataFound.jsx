import React, { useContext } from 'react'
import { SearchContext } from '../../Context';

export default function NoDataFound() {
    const { searchedText } = useContext(SearchContext);

    return (
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-10" role="alert">
            {!searchedText ? (<>
                <strong class="mb-2.5 text-xl font-bold lg:text-2xl">No news found!</strong>
                <span class="block sm:inline"> Make sure your api server is running properly.</span>
            </>) : (<>

                <strong class="mb-2.5 text-xl font-bold lg:text-2xl">No news found with the keyword "{searchedText}"</strong>.
                <span class="block sm:inline"> Try searching with different keywords.</span>
            </>)}



        </div>)
}
