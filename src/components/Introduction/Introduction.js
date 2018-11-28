import React from 'react'
import './Introduction.css'
import avatar from '../../images/avatar.jpeg'

class Introduction extends React.Component {
    render() {
        return (
            <div className="introduction">
                <img 
                className="introduction_avatar"
                src={avatar}/>
                <hr/>
                <div className="introduction_text">
                    <p>
                        Tag:    前端 java
                    </p>
                    <p>偶尔向往着AI</p>
                    <p>结果目前在全干工程师的道路上一路向北……</p>
                </div>
            </div>
        )
    }
}

export default Introduction;