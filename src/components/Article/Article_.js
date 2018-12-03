import React from 'react'
import './Article_.css'
import Title from './Title'
import Info from './Info'
import ReactMarkdown from 'react-markdown'
class Article extends React.Component {
    render() {
        const text = '# This is a header\n\nAnd this is a paragraph'
        return (
            <div className="Article_">
                <Title/>
                <Info/>
                <ReactMarkdown source={text} className="article_text"/>
            </div>
        )
    }
}

export default Article;