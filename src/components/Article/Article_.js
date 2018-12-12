import React from 'react'
import './Article_.css'
import Title from './Title'
import Info from './Info'
import ReactMarkdown from 'react-markdown'

class Article extends React.Component {
    
    render() {
        return (
            <div className="Article_">
                <Title title={this.props.title}/>
                <Info info={this.props.info}/>
                <ReactMarkdown source={this.props.text} className="article_text"/>
            </div>
        )
    }
}

export default Article;