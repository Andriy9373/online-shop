<template>
    <div class="alert">
        <h5>
            {{ title }}
        </h5>
        <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closePopup"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <div
            class="modal-body"
            ref="modalBody"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupView',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isRulesRead: false
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    mounted() {
        console.log('mounted')
        document.querySelector('.modal-body').scrollTop = 280
    },
    methods: {
        closePopup() {
            this.$emit('close')
        },
        onBodyScroll() {
            console.log('scrolled')
            console.log(document.querySelector('.modal-body').scrollTop)
        }
    }
}
</script>

<style lang="scss" scoped>
    .alert {
        position: fixed;
        background-color: red;
        color: #ffffff;
        top: 80px;
        left: 41%;
    }
</style>