import Mock from 'mockjs'
import {Random} from 'mockjs'

Mock.mock('/getArticlesList',{
    'success': true,
    'data|5': [{
        'id|1-100': 1,
        'title|2-4': '这是标题',
        'tag|1': ['vue','java','react'],
        'date': Random.date()
    }]
})