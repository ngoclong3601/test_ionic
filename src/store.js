import {createStore, thunk, action} from 'easy-peasy';
import axios from 'axios';


const API_URL = 'https://5f7e84300198da0016893989.mockapi.io/api/products';

const store = createStore({
    products: [],
    pushLocalProducts: action((state,payload)=>{
        state.products = [
            state.products, 
            ...payload
        ]

    }),
    fetchProduct: thunk(async(actions) =>{
        const {data} = await axios.get(API_URL);
        actions.pushLocalProducts(data);
        console.log(data);
    }),

    addProduct: action((state,payload)=>{
        var newProduct = [
           state.products.name = payload,
           state.products.price = payload
        ];
        state.products.push(newProduct);
    }),
    saveAddProduct: thunk(async(actions, payload) =>{
        const {data} = await axios.post(API_URL, payload);
        actions.addProduct(data);
    }),

    removeProduct: action((state,id)=>{
        state.products = state.products.filter(product => product.id !== id);
    }) ,
    deleteProduct: thunk(async (actions,id)=>{
        const {data} = await axios.delete(API_URL,id);
        actions.removeProduct(data);
    }) 
})

export {store};