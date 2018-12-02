import React from 'react'
import './Breadcrumd.css'
import {Link} from 'react-router-dom'

class Breadcrumd extends React.Component {
    state = {  }
    render() {
        return (
            <div className="Breadcrumd">
                <Link to="/">博客</Link>
                <span>/vue</span>  
            </div>
        )
    }
}

export default Breadcrumd