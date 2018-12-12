import React from 'react'
import './Article.css'
import Article_ from '../../components/Article/Article_'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
import { getRouterParams } from '../../methods'
class Article extends React.Component {
    render() {
        return (
            <div className="article page">
                <Breadcrumb  page={getRouterParams(this.props.match.params)}/>
                <Article_/>
            </div>
        )
    }
}

export default Article;