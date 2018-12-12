import React from 'react'
import './Categories.css'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
import TagNav from '../../components/TagNav/TagNav'
import { get,allRequest,spread } from '../../http/http'
import { getRouterParams } from '../../methods'
if(process.env.NODE_ENV === 'development'){
    require ('../../mock/ArticlesList')
    require('../../mock/TagNav')
}

class Categories extends React.Component {
    constructor(props){
        super(props)
        this.state={
            articlesList:[],
            navs:[]
        }
    }

    componentDidMount(){
        const getArticlesList = () => get('/getArticlesList')
        const getNavs = () => get('/getNavs')

        allRequest([getArticlesList(),getNavs()])
        .then(spread((articlesList,navs) => {
            this.setState({
                articlesList: articlesList.data,
                navs: navs.data
            })
        }))
    }
    render() {
        return (
            
            <div className="categories">
                <Breadcrumb page={getRouterParams(this.props.match.params)}/>
                <div className="page">
                    <div className="categories_main page_main">
                        <ArticlesList articlesList={this.state.articlesList}/>
                    </div>
                    <div className="categories_slider page_slider">
                        <TagNav navs={this.state.navs}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Categories