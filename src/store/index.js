import { createStore } from 'vuex'
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';


export default createStore({
state: {
    products: [],
    cart: [],
},
mutations,
actions,
getters,
})