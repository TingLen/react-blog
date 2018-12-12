import React from 'react'
import './Article.css'
import Article_ from '../../components/Article/Article_'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
class Article extends React.Component {
    render() {
        const getRouter = () => {
            console.log(this.props)
        }
        return (
            <div className="article page">
                <Breadcrumb page={['1','2']}/>
                <Article_/>
            </div>
        )
    }
}

export default Article;