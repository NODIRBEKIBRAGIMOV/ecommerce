<template>
    <div class="father">
        <ContentChild v-for="childw in child" v-bind:childw="childw" v-bind:key="childw.id" @onlike="$emit('onlike', childw.id)"/>
    </div>
</template>
<script>
import ContentChild from './ContentChild.vue';

export default {
    components: { ContentChild },
    props:{
        child:{
            type: Array,
            required: true,
        }
    }

}
</script>
<style scoped>
    .father{
        width: 100%;
        height: auto;
        display: grid;
        flex-wrap: wrap;
        gap: 25px;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 35px;
    }

    @media (max-width: 965px){
        .father{
            grid-template-columns: auto auto auto !important;
            column-gap: 35px;
            row-gap: 35px;
        }
    }
    @media (max-width: 576px) {
        .father{
            grid-template-columns: auto auto !important;
            column-gap: 20px;
        }
    }
</style>