import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import search from '../../assets/icons/search.svg'
import { getCurrentDate } from '../../utils/currentDate'
import { useDebounce } from '../../hook';
import { NewsContext, SearchContext } from '../../Context';

export default function HeaderTop() {
    const [showSearchfield, setshowSearchfield] = useState(false)
    const { setsearchedText } = useContext(SearchContext);
    const inputRef = useRef()

    useEffect(() => {
        if (showSearchfield && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showSearchfield])


    const handleSearchIcon = () => {
        setshowSearchfield(true)
    }

    const doSearch = useDebounce((term) => {
        setsearchedText(term)
    }, 500);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <div
            className="container mx-auto flex flex-wrap items-center justify-between gap-6"
        >

            <div className="flex items-center space-x-4">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 15.4286L8 0.571507"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.4282 8L0.499512 8"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11"
                        stroke="#00D991"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>{getCurrentDate()}</span>
            </div>

            <a href="/">
                <img
                    className="max-w-[100px] md:max-w-[165px]"
                    src={logo}
                    alt="Lws"
                />
            </a>

            {/* <div class="relative rounded-md border border-gray-300 flex items-center">
                <input ref={test} type="search" class="bg-white w-full px-4 py-2 border-r-0 rounded-l-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 focus:outline-none focus:border-sky-500" placeholder="Search..."/>
               
            </div> */}


            <div className="flex items-center space-x-3 lg:space-x-8 mt-20000">
                {showSearchfield && (
                    <input
                        ref={inputRef}
                        className="bg-transparent  placeholder:text-gray text-black w-full text-lg md:text-base  border-2"
                        placeholder="Search Location"
                        onChange={handleChange}

                    />
                )}
                <img src={search} onClick={handleSearchIcon} />
            </div>
        </div>
    )
}
