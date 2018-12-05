import React from 'react'
import './index.css'
import Tag from './Tag'
import Date from './Date'
import Title from './Title'
class ArticlesListItem extends React.Component {
    render() {
        return (
            <div className="articlesListItem">
                <Title title={this.props.articlesListItem.title} id={this.props.articlesListItem.id}/>
                <hr/>
                <div className="articlesListItem_bottom">
                    <Tag tag={this.props.articlesListItem.tag}/>
                    <Date date={this.props.articlesListItem.date}/>
                </div>
            </div>
        );
    }
}

export default ArticlesListItem;