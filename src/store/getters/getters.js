export default {
    getTotalPrice(state) {
        let totalPrice = 0;
        state.cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        })
        return totalPrice;
    }
}