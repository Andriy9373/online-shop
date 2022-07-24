<template>
    <div class="base-card" :style="styles">
        <slot></slot>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            styles : {
                '--padding' : this.padding,
                '--margin': this.margin,
                '--overflow': this.overflow,
				'--border-radius': this.borderRadius,
                '--background-color': this.backgroundColor
            }
        }
    },
    props:{
        padding: {
            type: String,
            default: '25px',
        },
        margin: {
            type: String,
            default: '0',
        },
        overflow: {
            type: String,
            default: 'hidden'
        },
		borderRadius: {
			type: String,
			default: '4px'
		},
        backgroundColor: {
            type: String,
            default: '#fff'
        }
    }
}
</script>
 
<style lang="scss" scoped>
.base-card {
    background-color: var(--background-color);
    overflow: var(--overflow);
    border-radius: var(--border-radius);
    padding: var(--padding);
    margin: var(--margin);
    // -webkit-box-shadow: 3px 3px 5px 1px rgb(0 0 0 / 10%);
    // -moz-box-shadow: 3px 3px 5px 1px rgb(0 0 0 / 10%);
    // box-shadow: 3px 3px 5px 1px rgb(0 0 0 / 10%);
    // -webkit-transition: all .3s ease 0s;
    // -o-transition: all .3s ease 0s;
    // transition: all .3s ease 0s;

    // &:hover {
    //     -webkit-box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 11%);
    //     -moz-box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 11%);
    //     box-shadow: 3px 3px 8px 2px rgb(0 0 0 / 11%);
    // }
}
</style>