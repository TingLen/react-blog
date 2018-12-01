import React from 'react'
import ArticlesListItem from '../ArticlesListItem'
class ArticlesList extends React.Component {
    render() {
        return (
            <div className="ArticlesList">
             <ArticlesListItem/>
             <ArticlesListItem/>
             <ArticlesListItem/>
            </div>
        )
    }
}

export default ArticlesList;