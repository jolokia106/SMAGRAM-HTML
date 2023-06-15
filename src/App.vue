<script>
import DefaultLayout from './components/components/layouts/DefaultLayout.vue';
import NoneLayout from './components/components/layouts/NoneLayout.vue';

export default {
    components: {
        'default-layout': DefaultLayout,
        'none-layout': NoneLayout
    },
    data() {
        return {
            defaultLayout: 'default'
        }
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || this.defaultLayout) + '-layout';
        }
    }
}

</script>
<template>
    <component v-bind:is="layout" />
</template>
