import React from 'react'
import { publishedDateConvert } from '../../utils/currentDate';

export default function ContentWithText({article}) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">

            <div className="col-span-12 md:col-span-4">
                <a href="#" onClick={(e) => e.preventDefault()}
                ><h3
                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                >
                        {article?.title}
                    </h3></a>
                <p className="text-base text-[#292219]">
                    {article?.description}
                </p>
                <p className="mt-5 text-base text-[#94908C]">
                    {publishedDateConvert(article?.publishedAt)}
                </p>
            </div>
        </div>
    )
}
