import React from 'react'
import './Date.css'
class ArticleDate extends React.Component {
    render() {
        return (
            <span className="articleListItem_date">{this.props.date}</span>
        )
    }
}

export default ArticleDate