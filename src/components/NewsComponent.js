import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class NewsComponent extends Component {

   static defaultProps = {
       country : "in",
       pageSize : 6,
       category : "general",
   }

   static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,  
      category : PropTypes.string, 
 
   }

    constructor(props){
        super(props);
        this.state = {
            articles:[],
            page:1,
            loading:false,

        }
    }

    async updateNews(){
          
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e18b6f36558845b0b4baa5fd1922773f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles,
          totalResults: parsedData.totalResults,
          loading:false,
        })
    }

     componentDidMount(){
       
        this.updateNews();
        
    } 
    
    handleNextClick = async() =>{
        console.log("next");

        if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    
        }
        else{
            this.setState({
                page: this.state.page+1,
            })
           this.updateNews();
          
        }
       
    }
    handlePrevClick = async () => {
        console.log("prev")

        this.setState({
            page: this.state.page+1,
        })
       this.updateNews();
        
    }

    render() {
        const str = this.props.category;
        return (
            <div className="container my-5">
                <h1 className="text-center">
                    {str.toUpperCase()} - Top Headline
                </h1>
                <div className="my-3"> 
                {this.state.loading && <Spinner/>}

                </div>
                
            
               <div className="row">
                   {!this.state.loading && this.state.articles.map((Element) => {
                       return (
                        <div className="col-md-4 my-3" key="{Element.publishedAt}" >
                         <NewsItem  title = {Element.title} description = {Element.description} imageUrl = {!Element.urlToImage?"https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg":Element.urlToImage}
                         newsUrl={Element.url}
                        time = {Element.publishedAt}
                        source = {Element.source.name}
                        author = {!Element.author?"Unknown":Element.author}
                       />
                    </div>
                       )
                   })}
                </div>  
                <div className="d-flex justify-content-between my-3">
                    <button disabled = {this.state.page <= 1} type="button"className="btn btn-primary" onClick={this.handlePrevClick}>Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"className="btn btn-primary" onClick={this.handleNextClick}>Next</button>
                </div>
    
            </div>
    
        )
    }
}
