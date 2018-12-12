import React from 'react'
import './Categories.css'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
import TagNav from '../../components/TagNav/TagNav'
import { get,allRequest,spread } from '../../http/http'
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
        const getRouter = () => {
            const arr = []
            for(let item in this.props.match.params){
                arr.push(this.props.match.params[item])
            }
            return arr
            
        }
        return (
            
            <div className="categories">
                <Breadcrumb page={getRouter()}/>
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