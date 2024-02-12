import React from 'react'
import HeaderTop from './HeaderTop'
import Category from './Category'

export default function HeaderWrapper() {
    return (
        <nav className="border-b border-black py-6 md:py-8">
            <HeaderTop />
            <Category />
        </nav>
    )
}
