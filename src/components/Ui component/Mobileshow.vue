<template>
    <div class="mobile-show">
        <RouterLink to="/"><span><i class='bx bx-home'></i></span></RouterLink>
        <span><i class='bx bx-user'></i></span>
        <span><KorzinkaBtnModal /></span>
        <span><RouterLink to="/Sevimlilar"><i class='bx bx-heart'></i></RouterLink></span>
    </div>
</template>
<script>
import KorzinkaBtnModal from './KorzinkaBtnModal'
export default {
    components: {KorzinkaBtnModal}
}
</script>
<style scoped>
.mobile-show {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: none;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 200px;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
span i{
    font-size: 22px;
    color: #7777779c;
    font-size: 22px;
    margin: 0 5px;
    cursor: pointer;
}
span i:hover {
    color: #777;
}
@media (max-width: 1025px) {
    .mobile-show{
        display: grid;
    }
}
</style>