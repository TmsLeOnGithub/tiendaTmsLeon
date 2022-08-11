export const getItem = (items, idItem)=> {
    return new Promise ((resolve,reject) =>{
        setTimeout (()=> {
            resolve(items.find((item) => item.id === idItem) )
        },2000)
    })};