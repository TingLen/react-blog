import React from 'react'
import './Info.css'
class Info extends React.Component {
    render() {
        return (
            <div className="article_info">
                <span className="info_item">作者：{this.props.info.author}</span>
                <span className="info_item">分类：{this.props.info.category}</span>
                <span className="info_item">{this.props.info.date}</span>
            </div>
        )
    }
}

export default Info