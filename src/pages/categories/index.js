import React from 'react'
import './Categories.css'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
import TagNav from '../../components/TagNav/TagNav'

class Categories extends React.Component {
    render() {
        return (
            <div className="categories page">
                <div className="categories_main page_main">
                    <Breadcrumb/>
                    <ArticlesList/>
                </div>
                <div className="categories_slider page_slider">
                    <TagNav/>
                </div>
            </div>
        )
    }
}

export default Categories