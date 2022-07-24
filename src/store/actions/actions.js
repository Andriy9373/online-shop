import axios from 'axios';

const URL = "http://localhost:5000/api/products";

export default {
    async getProducts({commit}) {
        try {
            const products = await axios.get(URL);
            commit('setProducts', products.data);
        }
        catch {
            console.error('Couldn\'t connect to API!'); 
        }
    },
    pushToCart({commit}, payload) {
        commit('setCart', payload);
    },
    deleteProductFromCart({commit}, payload) {
        commit('deleteProduct', payload);
    },
    incrementQuantity({commit}, index) {
        commit('incrementItem', index);
    },
    decrementQuantity({commit}, index) {
        commit('decrementItem', index);
    },
}