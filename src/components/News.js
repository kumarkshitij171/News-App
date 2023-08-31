import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
    
    capitalize=(string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: 'false',
            // may be some spinner we run while loading
            page: 1,
            dummyUrl : "https://cdn.ndtv.com/common/images/ogndtv.png",
        }
        
        document.title=`NewsApp-${this.capitalize(this.props.category)}`       
    }

    

    async componentDidMount() {
      //console.log("cdm");
      //   it runs before render method runs
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`
    //   url = "block"
      this.setState({loading:true})
      let data = await fetch(url)
      //   console.log(data);
      let parsedData = await data.json()
      // console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        loading : false
    })
    }
    dummyUrl = "https://cdn.ndtv.com/common/images/ogndtv.png"


    handlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults 
        })

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading : false
        })
    }
    
    handleNextClick=async()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){  
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults
            })
            
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles,
                loading : false
            })
            console.log(this.state.page);
        }
    }
    
    render() {
        return (
            <>
            
                <h2 className='text-center my-4'>News App - Top {this.capitalize(this.props.category)} Headlines</h2>
                {this.state.loading && <Spinner/>}
                
                {!this.state.loading &&<div className="d-flex flex-wrap" >
                    {this.state.articles.map((element) => {
                        return <div key={element.url}>
                                <NewsItem tittle={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imgUrl={!element.urlToImage?this.dummyUrl:element.urlToImage} newsUrl={element.url} />
                            </div>
                    })}
                </div>}

                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-success mb-3" onClick={this.handlePrevClick}>&larr; Previous</button>

                <button disabled = {(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success mb-3" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}
