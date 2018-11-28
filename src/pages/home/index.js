import React from 'react'
import Introduction from '../../components/Introduction/Introduction'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import TagNav from '../../components/TagNav/TagNav'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <ArticlesList/>
                <TagNav/>
                <Introduction/>
            </div>
        )
    }
}

export default Home;