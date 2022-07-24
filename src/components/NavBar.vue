<template>
    <div class="topnav">
        <div class="nav">
            <router-link
                :class="{active: route === 'catalog'}"
                :to="{name: 'catalog'}"
            >
                {{ labels.catalog }}
            </router-link>
            <router-link
                class="cart"
                :class="{active: route === 'cart'}"
                :to="{name: 'cart'}"
            >
                {{ labels.cart }}
                <div class="cart__element" v-if="getTotalPrice > 0">
                    Total amout: {{ getTotalPrice }}₴
                </div>
            </router-link>
        </div>
        <TimeClock class="time-clock"/>
        <div class="search-container">
            <input
                type="text"
                placeholder="Search.."
                name="search"
                v-model="search"
            />
        </div>
    </div>
</template>

<script>
import TimeClock from '@/components/TimeClock';
import { mapGetters } from 'vuex';

export default {
    name: 'NavBar',
    components: {
        TimeClock,
    },
    props: {
        route: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            search: '',
            labels: {
               catalog: 'Catalog',
               cart: 'Cart',
               submit: 'Submit'
            }
        }
    },
    computed: {
        ...mapGetters({
            getTotalPrice: 'getTotalPrice'
        })
    }
}
</script>

<style lang="scss" scoped>
// * {box-sizing: border-box;}

// body {
//     margin: 0;
//     font-family: Arial, Helvetica, sans-serif;
// }

.topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9d9d9;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 1000;

    .nav {
        .cart {
        position: relative;

        &__element {
            position: absolute;
            top: 48px;
            left: -65px;
            min-width: 200px;
            background-color: #0080f5;
            border-radius: 8px;
            color: #ffffff;
            padding: 10px;
            z-index: 1000;
        }
        }

        a {
            float: left;
            display: block;
            color: black;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;

            &:hover {
                // background-color: #2196F3;
                // color: #ffffff;
            }
        }
    }

    .time-clock {
        margin-top: -8px;
    }
}

.topnav a.active {
    background-color: #2196F3;
    color: white;
}

.topnav .search-container {
    float: right;
}

.topnav input[type=text] {
    padding: 4px;
    font-size: 16px;
    margin-right: 10px;
    border: none;
}

.topnav .search-container button {
    float: right;
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

// .topnav .search-container button:hover {
//     background: #ccc;
// }

@media screen and (max-width: 700px) {
    .topnav .search-container {
        float: none;
    }
    .topnav a, .topnav input[type=text], .topnav .search-container button {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }
    .topnav input[type=text] {
        border: 1px solid #ccc;  
    }
}
</style>