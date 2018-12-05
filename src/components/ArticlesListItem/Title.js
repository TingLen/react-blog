import React from 'react'
import {Link} from 'react-router-dom'
import './Title.css'
class Title extends React.Component {
    state = {  }
    render() {
        return (
            <h1 className="articlesListItem_title">
                <Link to={"/article/"+this.props.id}>{this.props.title}</Link>
            </h1>
        )
    }
}

export default Title