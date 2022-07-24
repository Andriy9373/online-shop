<template>
    <ShopCatalog @addToCart="addToCart"/>
</template>

<script>
import ShopCatalog from '@/components/ShopCatalog'
import { mapActions } from 'vuex';

export default {
    name: 'MainPage',
    components: {
        ShopCatalog,
    },
    methods: {
        ...mapActions({
            pushToCart: 'pushToCart'
        }),
        addToCart(value) {
            this.pushToCart(value);
        }
    },
}
</script>

<style lang="scss" scoped></style>