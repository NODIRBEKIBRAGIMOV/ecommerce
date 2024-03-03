<template>
    <header>
        <Navbar />
        <Search />
    </header>
    <Mobileshow />
    
</template>
<script>
import Navbar from './Navbar.vue';
import Search from './Search.vue';
import Mobileshow from './Ui component/Mobileshow.vue';

export default {
    components: { Navbar, Search, Mobileshow }
}
</script>
<style scoped>
header {
    width: 100% !important;
    height: 146px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10 !important;
}
</style>