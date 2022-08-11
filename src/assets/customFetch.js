import { productos } from "./productos"

export const customFetch =(items, idCategoria)=> {

    return new Promise ((resolve,reject) =>{
        setTimeout (()=> {
            resolve(!idCategoria ? items : items.filter(producto => producto.categoria === idCategoria))
        },2000)
    })
}