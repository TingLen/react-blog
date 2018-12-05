import Mock from 'mockjs'

Mock.mock('/getNavs',{
    'success': true,
    'data': ['vue','react','java','nodejs']
})