import React from 'react'
import './TagNav.css'
import { Link} from 'react-router-dom'

class TagNav extends React.Component {
    render() {
        const liNode = this.props.navs.map(node => (
            <li key={node}>
                <Link to={"/categories/" + node}>{node}</Link>
            </li>
        ))
        return (
            <div className="TagNav">
                <h1 className="TagNav_title">归档</h1>
                <hr/>
                <ul className="TagNav_list">
                    {liNode}
                </ul>
            </div>
        )
    }
}

export default TagNav;