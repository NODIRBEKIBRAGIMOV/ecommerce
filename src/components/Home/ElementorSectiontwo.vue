<template>
    <div class="elementor-container">
        <div class="item1" v-motion-slide-visible-once-left>
            <h3 v-motion-slide-visible-once-top>TRENDLAR O'ZGARIYOR</h3>
            <h2 v-motion-slide-visible-once-top>MAREVO QALADI</h2>
            <RouterLink to="/katalog"><button v-motion-slide-visible-once-top>Katalogga o'ting</button></RouterLink>
        </div>
        <div class="item2">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.elementor-container {
    width: 1420px;
    height: 522px;
    display: grid;
    grid-template-areas: 'item1 item1 item1 item1 item2 item2';
    padding: 10px;
    gap: 20px;
    margin: 105px auto 0 auto;
}

.item1 {
    grid-area: item1;
    width: 100%;
    height: 100%;
    background-color: #2C2C2C0D;
    background-image: url(https://marevo.style/wp-content/uploads/2023/07/NTS04440-1.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 45px;
}
.item1 h3{
    margin: 0;
    font-size: 27.6px;
    font-weight: 300;
    letter-spacing: 5.6px;
    color: black;
}
.item1 h2{
    font-size: 47px;
    font-weight: 300;
    color: black;
    margin: 0 0 20px 0;
}
.item1 a{
    margin: 0;
}
.item1 button{
    font-size: 16px;
    letter-spacing: 0.8px;
    fill: black;
    color: black;
    background-color: #F4F4F400;
    border: 1px solid black;
    border-radius: 0px 0px 0px 0px;
    padding: 19px 29px 19px 29px;
}
.item1 button:hover{
    background: #000;
    color: white;
    transition: all 0.2s;
}
.item2 {
    width: 100%;
    height: 100%;
    grid-area: item2;
    margin-right: 0 !important;
    background-color: #2C2C2C0D;
    background-image: url(https://marevo.style/wp-content/uploads/2023/02/NTS04517-scaled.jpg);
    background-position: bottom;
    background-size: cover;

}

@media (max-width: 1420px) {
    .elementor-container {
        width: 100%;
        padding: 40px;
    }

    .item1 {
        background-position: 80%;
    }
    .item2{
        width: 95%;
    }
}

@media (max-width: 865px) {
    .elementor-container {
        width: 100%;
        height: 420px;
        grid-template-areas: 'item1 item1 item1 item1';
    }
    .item1 h3{
        font-size: 20px;
    }
    .item1 h2{
        font-size: 38px;
    }
    .item1 button{
        padding: 15px 25px;
    }
    .item2{
        display: none;
    }
}
@media (max-width: 576px){
    .elementor-container{
        padding: 20px;
    }
    .item1{
        justify-content: flex-start;
        padding: 65px 0 0 20px;
    }
    .item1 h3{
        font-size: 16px;
    }
    .item1 h2{
        font-size: 35px;
    }
    .item1 button{
        padding: 10px 20px;
    }
}
</style>