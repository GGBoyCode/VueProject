<template>
    <a
        :style="{color:defaultColor}"
        :href="disabled ? null : href"
        v-bind="$attrs"
        @click="handleClick",
    >

        <i :class="icon" v-if="icon"></i>

        <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

        <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>
    </a>
</template>

<script>

    export default {
        name: 'ElLink',

        props: {
            underline: {
                type: Boolean,
                default: true
            },
            defaultColor: {
                type: String,
                default: '#fff'
            },
            actionColor: {
                type: String,
                default: 'red'
            },
            disabled: Boolean,
            href: String,
            icon: String,

        },

        methods: {
            handleClick(event) {
                if (!this.disabled) {
                    if (!this.href) {
                        this.$emit('click', event);
                    }
                }
            },


        }
    };
</script>
