import React from 'react'
import './TagNav.css'
import { Link} from 'react-router-dom'

class TagNav extends React.Component {
    render() {
        return (
            <div className="TagNav">
                <h1 className="TagNav_title">归档</h1>
                <hr/>
                <ul className="TagNav_list">
                    <li><Link to="/categories/vue">vue</Link></li>
                    <li><Link to="/categories/react">react</Link></li>
                    <li><Link to="/categories/java">java</Link></li>
                </ul>
            </div>
            
        )
    }
}

export default TagNav;