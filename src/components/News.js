import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props) => {

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // if there is no image then use this dummy image
    const dummyUrl = "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png";

    document.title=`NewsApp-${capitalize(props.category)}`       

    useEffect(() => {
        //   it runs before page reload
        updateNews()
        // to remove the warning no dependency array is there
        // eslint-disable-next-line
    }, [])

    // this will run when country is changed
    useEffect(() => {
        updateNews()
        setPage(1)
        // eslint-disable-next-line
    }, [props.country])

    const setNews = async(pageno)=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pageno}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // have to set page no from where call the function
        setArticles(parsedData.articles)
        setLoading(false)

    }
    const updateNews = async () => {
        setNews(page);
    }


    const handlePrevClick = async () => {
        setNews(page-1)
        setPage(page - 1)
    }

    const handleNextClick = async () => {
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            setNews(page+1)
            setPage(page + 1)
        }
    }

    return (
        <>

            <h2 className='text-center my-4'>News App - Top {capitalize(props.category)} Headlines</h2>
            {loading && <Spinner />}

            {!loading && <div className="d-flex flex-wrap" >
                {articles.map((element) => {
                    return <div key={element.url}>
                        <NewsItem tittle={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={!element.urlToImage ? dummyUrl : element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>}

            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-success mb-3" onClick={handlePrevClick}>&larr; Previous</button>

                <button disabled={(page + 1) > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-success mb-3" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </>
    )

}

export default News