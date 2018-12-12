import React from 'react'
import './Article.css'
import ArticleContent from '../../components/Article/Article_'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumd'
import { getRouterParams } from '../../methods'
import { get } from '../../http/http'
if(process.env.NODE_ENV === 'development'){
    require ('../../mock/Article')
}
class Article extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            info: {},
            text: '# This is a header\n\nAnd this is a paragraph'
        }
    }
    componentDidMount(){
        get('/getArticle')
        .then(res => {
            this.setState({
                title: res.data.title,
                info: res.data.info,
                text: res.data.text
            })
        })
    }

    render() {
        return (
            <div className="article page">
                <Breadcrumb  page={getRouterParams(this.props.match.params)}/>
                <ArticleContent 
                 title={this.state.title}
                 info={this.state.info}
                 text={this.state.text}/>
            </div>
        )
    }
}

export default Article;