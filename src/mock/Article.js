import Mock from 'mockjs'

Mock.mock('/getArticle',{
    'success': true,
    'data': {
        'title|1-3': '这是标题',
        'info': {
            'author': 'TingLen',
            'category|1': ['vue','java','react'],
            'date': Mock.Random.date()
        },
        'text': Mock.Random.cparagraph()
    }
})