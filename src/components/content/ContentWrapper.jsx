import React, { Fragment, useContext } from 'react'
import { NewsContext } from '../../Context';
import ContentWithImage from './ContentWithImage';
import ContentWithText from './ContentWithText';
import NoDataFound from './NoDataFound';

export default function ContentWrapper() {
  const { newsData } = useContext(NewsContext);
  const { articles } = newsData;

  return (
    <main className="my-10 lg:my-14">
      {articles?.length > 0 ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <>
            {articles?.map((article) => (
              <Fragment key={article?.title}>
                {article?.urlToImage ? (
                  <ContentWithImage article={article} />
                ) : (
                  <ContentWithText article={article} />
                )}
              </Fragment>
            ))}
          </>
        </div>) : (
        <NoDataFound />
      )}


    </main>
  )
}
