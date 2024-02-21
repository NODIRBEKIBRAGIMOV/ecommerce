<template>
    <div class="search">
        <div class="box">
            <input type="search" placeholder="Qidiruv...">
            <a href="#">
                <i class='bx bx-search-alt-2'></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.search {
    width: 100%;
    height: 36px;
    padding: 0 0 15px 0;
    background: #fff;
    display: flex;
}
.box{
    width: auto !important;
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px 10px 15px 10px;
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    border: 1px solid #00000068;
}
.box:hover input{
    width: 400px;
}
.box input{
    width: 0;
    outline: none;
    border: none;
    font-weight: 400;
    transition: 0.8s;
    background: transparent;
}
.box a i{
    font-size: 25px;
    margin: 10px 0;
    height: 100%;
    padding: 3px 5px;
    border-radius: 50%;
    /* background-color: #0000001c; */
}
@media (max-width: 576px){
    .box:hover{
        width: 80% !important;
    }
}
</style>