import Mock from 'mockjs'
import {Random} from 'mockjs'

Mock.mock('/getLastArticle',{
    'success': true,
    'data':{
        'id|1-100': 1,
        'title|2-4': '这是标题',
        'text': Random.cparagraph(),
        'date': Random.date()
    }
})