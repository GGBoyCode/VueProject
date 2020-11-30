<template>
    <a
        :class="{'text-underline':underline}"
        :style="isFocus?{color:actionColor}:{color:defaultColor}"
        :href="disabled ? null : href"
        v-bind="$attrs"
        @mouseover="isFocus = true"
        @mouseout="isFocus = false"
    >

        <i :class="icon" v-if="icon"></i>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'LinkText',

        data(){
            return {
              isFocus:false
            };
        },
        props: {
            underline: {
                type: Boolean,
                default: false
            },
            defaultColor: {
                type: String,
                default: '#fff'
            },
            actionColor: {
                type: String,
                default: 'rgb(255, 208, 75)'
            },
            disabled: Boolean,
            href: String,
            icon: String,
        },

        methods: {

        }
    };
</script>

<style scoped>
    a{
        font-weight: 500;
        font-size: 14px;
    }
    .text-underline{
        text-decoration: none;
    }

</style>