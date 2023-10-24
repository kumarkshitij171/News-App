import React from 'react'

const NewsItem = (props) => {

        let { tittle, description, imgUrl, newsUrl } = props
        return (
            <>
                <div className="card my-3 mx-4 bg-dark border rounded" style={{ maxWidth: "18rem" }}>
                    <img src={imgUrl} className="card-img-top" alt='News-source' style={{ height: '161px' }} />
                    <div className="card-body">
                        <h5 className="card-title text-light">{tittle}...</h5>
                        <p className="card-text text-light">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
}
export default NewsItem