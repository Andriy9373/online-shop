<template>
    <div class="content">
        <h1>{{ labels.cart }}</h1>
        <div class="cart">
            <div class="container">
                <form>
                    <div class="fields">
                        <span>
                            <input
                                :placeholder="`${labels.first_name}...`"
                                type="text"
                                v-model="form.first_name"
                            />
                        </span>
                        <span>
                            <input
                                :placeholder="`${labels.last_name}...`"
                                type="text"
                                v-model="form.last_name"
                            />
                        </span>
                        <span>
                            <input
                                :placeholder="`${labels.phone}...`"
                                type="text"
                                v-model="form.phone"
                            />
                        </span>
                        <span>
                            <input
                                :placeholder="`${labels.address}...`"
                                type="text"
                                v-model="form.address"
                            />
                        </span>
                        <span>
                            <input
                                :placeholder="`${labels.discount_code}...`"
                                type="text"
                                v-model="form.discount_code"
                            />
                        </span>
                    </div>
                    <div class="submit">
                        <input
                            class="submit"
                            value="Submit"
                            type="button"
                            @click="submit"
                        />
                    </div>
                    <!-- <div class="user-page">
                        <div class="submit">
                            <input
                                class="submit"
                                value="Submit"
                                type="button"
                                @click="isPopupOpen = true"
                            />
                        </div>
                        <CustomAlert
                            v-if="isPopupOpen"
                            title="Пользовательское соглашение"
                            @close="isPopupOpen = false"
                        >
                            <p>Success</p>
                        </CustomAlert>
                    </div> -->
                </form>
            </div>
            <div class="products">
                <div class="product" v-for="(item, index) in cart" :key="index">
                    <img :src="require('@/assets/images/' + item.image)" alt="product"/>
                    <p>{{ item.name }}</p>
                    <p>{{ item.price }}₴</p>
                    <div style="display: flex">
                        <button
                            class="quantity-button"
                            @click="decrement(index)"
                        >
                            -
                        </button>
                        <p class="quantity-label">{{ labels.quantity }}: {{ item.quantity }}</p>
                        <button
                            class="quantity-button"
                            @click="increment(index)"
                        >
                            +
                        </button>
                    </div>
                    <button
                        class="button"
                        type="button"
                        @click="deleteProduct(index)"
                    >
                        {{ labels.delete }}
                    </button>
                </div>
                <div v-if="!this.cart.length">
                    {{ labels.empty_cart }}!
                    <router-link :to="{name: 'catalog'}">
                        {{ labels.go_to_catalog }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import CustomAlert from '@/components/Custom/CustomAlert';
import { mapState, mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: 'ShopCart',
    // components: {
    //     CustomAlert,
    // },
    data() {
        return {
            // isPopupOpen: false,
            form: {
                first_name: '',
                last_name: '',
                phone: '',
                address: '',
                discount_code: '',
            },
            labels: {
                delete: 'Delete',
                cart: 'Cart',
                quantity: 'Quantity',
                back_to_catalog: 'Back to catalog',
                go_to_catalog: 'Go to catalog',
                empty_cart: 'Empty cart',
                first_name: 'First Name',
                last_name: 'Last Name',
                phone: 'Phone',
                address: 'Address',
                discount_code: 'Discount code',
            }
        }
    },
    props: {},
    computed: {
        ...mapState({
            cart: 'cart'
        })
    },
    methods: {
        ...mapActions({
           deleteProductFromCart: 'deleteProductFromCart',
           incrementQuantity: 'incrementQuantity',
           decrementQuantity: 'decrementQuantity',
        }),
        deleteProduct(index) {
            this.deleteProductFromCart(index);
        },
        increment(index) {
            this.incrementQuantity(index);
        },
        decrement(index) {
            this.decrementQuantity(index);
        },
        async submit() {
            if (this.form.first_name &&
                this.form.last_name &&
                this.form.phone &&
                this.form.address
            ) {
                alert('Your order is successfully registered');
                const order = {
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    phone: this.form.phone,
                    address: this.form.address,
                    products: this.cart
                }
                await axios.post('http://localhost:5000/api/orders', order);
                this.form.first_name = '';
                this.form.last_name = '';
                this.form.phone = '';
                this.form.address = '';
                this.form.discount_code = '';
            }
            else {
                alert('Error! Incorrect form data!')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.submit {
    padding-right: 40px;

    &__button {
        color: #ffffff;
        background-color: #f9d9d9;
        padding: 10px 20px;
        border-radius: 20px;
        text-decoration: none;
    }
}

.content {
    height: 100vh;
    .cart {
        display: flex;
        justify-content: center;
        gap: 100px;
        padding-top: 80px;

            /*fonts*/
            // @import url(https://fonts.googleapis.com/css?family=PT+Sans:400,400italic);

            // @import url(https://fonts.googleapis.com/css?family=Droid+Serif);

            .container span:before {
                counter-increment:section;
                content:counter(section);
                border:2px solid #4c2639;
                width:40px;
                height:40px;
                color:#fff;
                display:inline-block;
                border-radius:50%;
                line-height:1.6em;
                font-size:1.5em;
                position: absolute;
                left: -60px;
                top: 4px;
                background:#2F1E27;
            }

            // .fields{
            //     border-left:2px solid #4c2639;
            // }

            .container span{
                display: block;
                position: relative;
                padding-top: 20px;
                margin-bottom: 22px; 
            }

            .container span:last-child{
                margin-bottom: -11px;
            }

            input{
            border:none;
            outline:none;
            display:inline-block;
            height:34px;
            vertical-align:middle;
            position:relative;
            bottom:14px;
            right:9px;
            border-radius:22px;
            width:220px;
            box-sizing:border-box;
            padding:0 18px;
            }

            input[type="button"]{ 
            background:rgba(197,62,126,.33) ! important;
            color:#fff;
            position:relative;
            left:9px;
            top:25px; 
            width:100px;
            cursor:pointer;
            }

        .products {
            overflow-y: scroll;
            width: 60%;
            height: 678px;
            .product {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #e9e9e9;
                box-shadow: 8px 8px 22px #e9d7d7, -8px -8px 22px #cddbcd;
                margin: 8px;
                padding: 8px;

                .quantity-label {
                    margin: 0 10px;
                }

                .quantity-button {
                    padding: 4px;
                    background-color: #2196F3;
                    color: #ffffff;
                    cursor: pointer;
                    border-radius: 6px;
                    border: none;
                }

                .button {
                    padding: 10px;
                    border-radius: 50px;
                    background: #2196F3;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    border: none;
                    transition: .3s ease;

                    &:hover {
                        opacity: .8;
                    }
                }

                img {
                    height: 200px;
                }
            }
        }
    }
}
</style>