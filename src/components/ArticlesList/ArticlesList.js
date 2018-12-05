import React from 'react'
import ArticlesListItem from '../ArticlesListItem'
class ArticlesList extends React.Component {

    render() {
        const items = this.props.articlesList.map(item => {
            return <ArticlesListItem articlesListItem = {item} key={item.id}/>
        })
        return (
            <div className="ArticlesList">
             {items}
            </div>
        )
    }
}

export default ArticlesList;