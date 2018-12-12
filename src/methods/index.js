export const getRouterParams = (params) => {
    const arr = []
    for(let item in params){
        arr.push(params[item])
    }
    return arr
    
}