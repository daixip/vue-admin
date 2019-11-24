<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"/>
    </svg>
</template>
<script>
export default {
    name: 'SvgIcon',
    props: {
    iconClass: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
    },
    //监听属性变化，并且计算属性
    computed: {
        iconName() {
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
            return 'svg-icon ' + this.className
            } else {
            return 'svg-icon'
            }
        }
    }
}
</script>
<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: currentColor;
}
</style>