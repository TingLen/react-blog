import React from 'react'
import './Info.css'
class Info extends React.Component {
    render() {
        return (
            <div className="article_info">
                <span className="info_item">作者：Tinlen</span>
                <span className="info_item">分类：react</span>
                <span className="info_item">2018-11-11 11:11</span>
            </div>
        )
    }
}

export default Info