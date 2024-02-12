import React from 'react'
import Footer from './Footer'
import HeaderWrapper from './header/HeaderWrapper'
import ContentWrapper from './content/ContentWrapper'
import { CategoryProvider, NewsProvider } from '../Provider'



export default function App() {
  return (
    <CategoryProvider>
      <NewsProvider>
        <HeaderWrapper />
        <ContentWrapper />
        <Footer />
      </NewsProvider>
    </CategoryProvider>
  )
}
