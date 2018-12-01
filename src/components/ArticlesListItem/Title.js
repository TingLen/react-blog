import React from 'react'
import {Link} from 'react-router-dom'
import './Title.css'
class Title extends React.Component {
    state = {  }
    render() {
        return (
            <h1 className="articlesListItem_title">
                <Link to="">文章标题文章标题文章标题</Link>
            </h1>
        )
    }
}

export default Title