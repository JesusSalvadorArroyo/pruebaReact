import { db } from './firebase'

export const getProduct = (id) => db.ref('productos/' + id)

export const getProducts = () => db.ref('productos')

export const getProductsInCart = (user) => db.ref(`productos-in-cart/${user}`)

//  https://tienda-angular2-b39e5.firebaseio.com/.json
