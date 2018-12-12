import React from 'react'
import './Introduction.css'
import avatar from '../../images/avatar.jpeg'

class Introduction extends React.Component {
    render() {
        return (
            <div className="introduction">
                <img 
                className="introduction_avatar"
                src={avatar}
                alt='avatar'/>
                <hr/>
                <div className="introduction_text">
                    <p>
                        Tag:    前端 java
                    </p>
                    <p>不会算法的java工程师不是个好的前端</p>
                </div>
            </div>
        )
    }
}

export default Introduction;