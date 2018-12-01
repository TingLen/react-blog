import React from 'react'
import './LastArticle.css'
import {Link} from 'react-router-dom'

class LastArticle extends React.Component {
    render() {
        return (
            <div className="lastArticle">
                <h1 className="lastArticle_title">这是标题这是标题这是标题</h1>
                <p className="lastArticle_text">
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
                这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是...
                <span className="lastArticle_moreBtn"><Link to="/">>>阅读全文</Link></span>
                </p>
                <div className="lastArticle_date">2018.11.11</div>
            </div>
        );
    }
}

export default LastArticle