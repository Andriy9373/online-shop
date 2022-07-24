<template>
    <div class="footer">Footer!</div>
</template>

<script>
export default {
    name: 'FooterBar',
    props: {},
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #f9d9d9;
    padding: 15px 0;
    color: #000000;
    text-align: center;
}
</style>