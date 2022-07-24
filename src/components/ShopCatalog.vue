<template>
    <h1>Welcome!</h1>
    <div class="center-me">
        <CustomSelect
            :options="options"
            :selected="selected"
            width="300px"
            @selected-category="selectedCategory"
        />
    </div>
    <div class="card__container">
        <div
            v-for="(item, index) in sortedProducts"
            :key="index"
            class="card"
        >
            <div class="card__content">
                <img :src="require('@/assets/images/' + item.image)" alt="product"/>
                <h3 class="card__header">{{ item.name }}</h3>
                <p class="card__info">{{ item.article }}</p>
                <p>Price: {{ item.price }}₴</p>
                <button
                    class="card__button"
                    @click="$emit('addToCart', item)"
                >
                    {{ labels.add_to_cart }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import CustomSelect from '@/components/Custom/CustomSelect';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ShopCatalog',
    components: {
        CustomSelect,
    },
    props: {},
    data() {
        return {
            options: [
                {gender: 'Male'},
                {gender: 'Female'},
                {gender: 'All'},
            ],
            selected: 'All',
            labels: {
                add_to_cart: 'Add to cart'
            }
        }
    },
    computed: {
        ...mapState({
            products: 'products',
            cart: 'cart',
        }),
        sortedProducts() {
            console.log(this.selected)
            if (this.selected === 'Male') {
                const male = [];
                this.products.forEach(product => {
                    if (product.category === 'Male') male.push(product)
                })
                return male;
            }
            else if (this.selected === 'Female') {
                const female = [];
                this.products.forEach(product => {
                    if (product.category === 'Female') female.push(product)
                })
                return female;
            }
            return this.products
        }
    },
    methods: {
        ...mapActions({
            getProducts: 'getProducts',
        }),
        selectedCategory(selected) {
            this.selected = selected
        },
    },
    mounted() {
        // console.log(this.$route.name)
        this.getProducts();
    }
}
</script>

<style lang="scss" scoped>
.center-me {
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

.catalog {
    .products {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .catalog-item {
            // background-color: $background-color;
            background-color: orange;
            flex-basis: 25%;
            // box-shadow: $box-shadow;
            margin: 8px;
            padding: 8px;
            img {
                height: 200px;
            }
        }
    }
}





@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.card {
    border-radius: 10px;

    &__container {
        padding-top: 20px;
        display: grid;
        width:100%;
        height:100%;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        color: white;
    }

    &__content {
        color: #000000;
        background: #e9e9e9;
        margin: 30px auto;
        border-radius: 5px;
        padding: 30px;
        box-shadow:  8px 8px 22px #e9d7d7, -8px -8px 22px #cddbcd;
        transition: 0.3s all ease-in-out;

        &:hover{
            margin-top:-10px;
        }

        img {
            height: 200px;
            width: 200px;
        }
    }

    &__header {
        text-transform: uppercase;
        font-size: 20px;
        margin: 40px auto;
    }

    &__button {
        padding: 10px;
        border-radius: 50px;
        background: #2196F3;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border: none;
        margin: 20px auto;
        transition: .3s ease;

        &:hover {
            opacity: .8;
        }
    }
}
</style>