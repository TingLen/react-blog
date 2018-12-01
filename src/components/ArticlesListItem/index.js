import React from 'react'
import './index.css'
import Tag from './Tag'
import Date from './Date'
import Title from './Title'
class ArticlesListItem extends React.Component {
    render() {
        return (
            <div className="articlesListItem">
                <Title/>
                <hr/>
                <div className="articlesListItem_bottom">
                    <Tag/>
                    <Date/>
                </div>
            </div>
        );
    }
}

export default ArticlesListItem;