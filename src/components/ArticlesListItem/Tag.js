import React from 'react'
import './Tag.css'
class ArticleTag extends React.Component {
    render() {
        return (
            <span className="articleListItem_tag">{this.props.tag}</span>
        )
    }
}

export default ArticleTag