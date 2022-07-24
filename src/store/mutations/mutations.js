export default {
    setProducts(state, payload) {
        state.products = payload;
    },
    setCart(state, payload) {
        let isProductExists = false;
        if (state.cart.length) {
        state.cart.map(function (item) {
            if (item.article === payload.article) {
            isProductExists = true;
            item.quantity++
            }
        })
        if (!isProductExists) {
            state.cart.push(payload)
        }
        } else {
        state.cart.push(payload)
        }
    },
    deleteProduct(state, payload) {
        state.cart.splice(payload, 1);
    },
    incrementItem(state, index) {
        state.cart[index].quantity++;

    },
    decrementItem(state, index) {
        if (state.cart[index].quantity > 1) state.cart[index].quantity--
    }
}