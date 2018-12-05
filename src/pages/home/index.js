import React from 'react'
import './Home.css'
import Introduction from '../../components/Introduction/Introduction'
import ArticlesList from '../../components/ArticlesList/ArticlesList'
import TagNav from '../../components/TagNav/TagNav'
import LastArticle from '../../components/LastArticle/LastArticle'
import { get,allRequest,spread } from '../../http/http'

if(process.env.NODE_ENV === 'development'){
    require ('../../mock/LastArticle')
    require ('../../mock/ArticlesList')
    require ('../../mock/TagNav')
}

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lastArticle:{
                id:0,
                title:'',
                text:'',
                date:''
            },
            articlesList:[],
            navs:[]
        }
    }
    componentWillMount(){
        const getLastArticle = () => get('/getLastArticle')
        const getArticlesList = () => get('/getArticlesList')
        const getNavs = () => get('/getNavs')
        //并发请求所有ajax
        allRequest([getLastArticle(),getArticlesList(),getNavs()])
        .then(spread((lasa,artl,navs) => {
            if(lasa.success){
                this.setState({
                    lastArticle: lasa.data
                })
            }
            if(artl.success){
                this.setState({
                    articlesList: artl.data
                })
            }
            if(navs.success){
                this.setState({
                    navs: navs.data
                })
            }
        }))
    }
    render() {
        return (
            <div className="home page">
                <div className="home_main page_main">
                    <LastArticle
                     lastArticle={this.state.lastArticle}/>
                    <h1 className="last_title">近期文章</h1>
                    <hr></hr>
                    <div className="last_list">
                        <ArticlesList articlesList={this.state.articlesList}/>
                    </div>
                </div>
                <div className="home_sider page_slider">
                    <div className="sider_nav">
                         <TagNav navs={this.state.navs}/> 
                    </div>
                    <div className="sider_introduction">
                        <Introduction/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home