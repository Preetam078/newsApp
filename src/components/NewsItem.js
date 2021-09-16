import React, { Component } from 'react'
import '../App.css'
export default class NewsItem extends Component {

  

    render() {
       let {title,description, imageUrl, newsUrl, time, source, author} = this.props
        return (
            <div>
                <div className="card-deck style">
                    <div className="card">
                        <img className="card-img-top" src={imageUrl} alt=""/>
                        
                        <div className="card-body">
                        
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(time).toGMTString()}</small></p>
                        <p><span className="badge bg-success">{source}</span></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                   
                    </div>
             </div>
        )
    }
}
