<template>
    <div class="custom-select" :style="widthStyle">
        <p
            class="custom-select__text"
            @click="areOptionsVisible = !areOptionsVisible"
        >
            {{ changeSelected }}
        </p>
        <div
            class="custom-select__options"
            v-if="areOptionsVisible"
        >
            <p 
                v-for="(item, index) in options"
                :key="index"
                @click="selectedCategory(item.gender)"
            >
                {{ item.gender }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CustomSelect',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        selected: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '100%'
        }
    },
    data() {
        return {
            areOptionsVisible: false,
            changeSelected: this.selected
        }
    },
    computed: {
        widthStyle() {
            return {'--width': this.width};
        }
    },
    methods: {
        selectedCategory(gender) {
            this.areOptionsVisible = !this.areOptionsVisible;
            this.changeSelected = gender;
            this.$emit('selectedCategory', gender);
        },
        hideOptions() {
            this.areOptionsVisible = false;
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 703) {
                this.areOptionsVisible = true;
            } else this.areOptionsVisible = false;
        })
    }
    // mounted() {
    //     document.addEventListener('click', this.hideOptions.bind(this), true);
    // },
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
.custom-select {
    position: relative;
    width: var(--width);

    &__text {
        cursor: pointer;
        border: 1px solid #aeaeae;
        border-radius: 4px;
    }

    &__options {
        position: absolute;
        top: 20px;
        width: 100%;
        cursor: pointer;
        border: 1px solid #aeaeae;
        background-color: #f9d9d9;
        border-radius: 4px;

        p {
            transition: .1s ease;
            &:hover {
                color: #ffffff;
                background-color: #0080f5;
            }
        }
    }
}
</style>