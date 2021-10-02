import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



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
            loading:true,
            totalResults:0
        }
    }

    async updateNews(){
        this.props.setProgress(30)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(70)
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:parsedData.articles,
          totalResults: parsedData.totalResults,
          loading:false
        })
        this.props.setProgress(100);
    }

     componentDidMount(){
       
        this.updateNews();
        
    } 
    fetchMoreData = async() => {
        this.setState({
            page:this.state.page + 1
        })

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({articles:this.state.articles.concat(parsedData.articles),
         
        })
         
      };

    render() {
        const str = this.props.category;
        return (
            <div className=" my-5">
                <h1 className="text-center">
                    {str.toUpperCase()} - Top Headline
                </h1>
                
                {this.state.loading && <Spinner/>}
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                  >
                 <div className="container">

               <div className="row">
                   {this.state.articles.map((Element) => {
                       return (
                           <div className="col-md-4 my-3" key={Element.url}>
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
                    </div>
                </InfiniteScroll>  
    
            </div>
    
        )
    }
}
