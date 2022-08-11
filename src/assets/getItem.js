export const getItem = (item)=> {
    return new Promise ((resolve,reject) =>{
        setTimeout (()=> {
            resolve(item)
        },2000)
    })};