import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'

function News() {
    const [newsData, setNewsData] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e48a4ff05144b53a9a3d18bb45cedfd&page=1`;
        fetch(url).then(resp => resp.json())
            .then(resp => setNewsData(resp.articles))
    }, [])

    const handleNextPage = () => {
        let pageCounting = pageCount;
        setPageCount(pageCount + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e48a4ff05144b53a9a3d18bb45cedfd&page=${pageCounting + 1}`;
        fetch(url).then(resp => resp.json())
            .then(resp => setNewsData(resp.articles))

    }
    const handlePrevPage = () => {
        let pageCounting = pageCount;
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e48a4ff05144b53a9a3d18bb45cedfd&page=${pageCounting - 1}`;
        fetch(url).then(resp => resp.json())
            .then(resp => setNewsData(resp.articles))
        setPageCount(pageCount - 1);
    }
    // console.log(typeof newsData);
    return (
        <div className='container my-4'>
            <h1 className='text-center mb-5'>Today's Top News Headlines</h1>
            <div className="row">
                {
                    newsData.map(data =>
                        <div className="col-md-4 my-2" key={data.url}>
                            <NewsItems title={data.title} myDesc={data.description} imgUrl={data.urlToImage} readLink={data.url} />
                        </div>
                    )
                }
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={pageCount <= 1} className='btn btn-dark btn-sm' onClick={handlePrevPage}>&larr; Previous</button>
                <button disabled={pageCount >= Math.ceil(70 / 19)} className='btn btn-dark btn-sm' onClick={handleNextPage}>Next &rarr;</button>
            </div>

        </div>
    );
}

export default News
