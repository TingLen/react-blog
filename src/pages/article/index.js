import React from 'react'
import './Article.css'
import Article_ from '../../components/Article/Article_'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
class Article extends React.Component {
    render() {
        return (
            <div className="article page">
                <Breadcrumb/>
                <Article_/>
            </div>
        )
    }
}

export default Article;