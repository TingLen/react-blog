import React from 'react'
import './Breadcrumd.css'
import {Link} from 'react-router-dom'

class Breadcrumd extends React.Component {
    
    render() {
        const route = '/'
        const nodeList = this.props.page.map((item,index) => {
            if(index === this.props.page.length - 1){
                return (
                    <span key={item}>{item}</span>
                )
            }
            route += (route + item + '/')
            return (
                <Link to={route} key={item}>{item + '/'}</Link>
            )
        })
        return (
            <div className="Breadcrumd">
                <Link to="/">博客/</Link>
                <span>{nodeList}</span>  
            </div>
        )
    }
}

export default Breadcrumd