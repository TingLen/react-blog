import React from 'react'
import './LastArticle.css'
import {Link} from 'react-router-dom'
class LastArticle extends React.Component {
    getText = (originalText) => {
        if(originalText.length >= 100){
            const newText = originalText.slice(0,100) + '...'
            return newText
        }
        return originalText
    }
    render() {
        return (
            <div className="lastArticle">
                <h1 className="lastArticle_title">{this.props.lastArticle.title}</h1>
                <p className="lastArticle_text">
                {this.getText(this.props.lastArticle.text)}
                <span className="lastArticle_moreBtn"><Link to={'/article/'+this.props.lastArticle.id}>>>阅读全文</Link></span>
                </p>
                <div className="lastArticle_date">{this.props.lastArticle.date}</div>
            </div>
        );
    }
}

export default LastArticle