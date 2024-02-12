import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { getCurrentDate } from '../../utils/currentDate'
import { useDebounce } from '../../hook';
import { SearchContext } from '../../Context';

export default function HeaderTop() {
    const { setsearchedText } = useContext(SearchContext);

    const doSearch = useDebounce((term) => {
        setsearchedText(term)
    }, 500);

    const handleChange = (e) => {
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-6"        >
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
            <a href="/"  onClick={(e) => e.preventDefault()}>
                <img
                    className="max-w-[100px] md:max-w-[165px]"
                    src={logo}
                    alt="Lws"
                />
            </a>
            <div className="flex items-center space-x-3 lg:space-x-8">
                <div className="relative">
                    <input type="text" placeholder="Search news..." className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-full bg-transparent focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300" onChange={handleChange} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
