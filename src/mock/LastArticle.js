import Mock from 'mockjs'

Mock.mock('/getLastArticle',{
    'success': true,
    'data':{
        'id|1-100': 1,
        'title|2-4': '这是标题',
        'text': Mock.Random.cparagraph(),
        'date': Mock.Random.date()
    }
})