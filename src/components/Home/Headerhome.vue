<template>
    <div class="header" style="position: relative;">
        <video muted="" playsinline="" autoplay=""
            style="object-fit: cover; background-size: cover; opacity: 1; width: 100%; height: 100%; display: block; position: absolute; top: 0;"
            class="videos" loop="" preload="auto">
            <source src="//marevo.style/wp-content/uploads/2022/03/bg.mp4" type="video/mp4">
        </video>
        <div class="header-text">
            <h4>#Marevo</h4>
            <h1><span>MAREVO</span> - bu tabiiy materiallar, qo'lda ishlangan va zamonaviy dizayn</h1>
            <h3>#MAREVO</h3>
            <RouterLink to="/katalog"><button class="btn"><span>Katalogga o'ting</span></button></RouterLink>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    width: 100%;
    height: 640px;
}

.header video {
    z-index: 0;
}

.header-text {
    position: absolute;
    right: 0;
    left: 0;
    width: 1520px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 100px;
}

.header-text h4 {
    display: none;
}

.header-text h1 {
    width: 55%;
    margin: 0 0 15px 0;
    font-size: 63px;
    font-weight: 400;
    color: white;
}

.header-text h1 span {
    font-size: 73px;
}

.header-text h3 {
    font-size: 25px;
    margin: 0 0 20px 0px;
    color: white;
}
.header-text a{
    margin: 0;
}
.btn {
    position: relative;
    text-transform: uppercase;
    overflow: hidden;
    border: none;
    padding: 10px 15px;
    background: #fff;
    transition: color 0.4s linear;
    cursor: pointer;
}

.btn:hover {
    color: white;
}

.btn::before {
    content: "KATALOGGA O'TING";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #2C2C2C;
    transform-origin: 0 0;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.6);
    transform: scaleX(0);
}

.btn:hover::before {
    transform: scaleX(1);
    background-color: #2C2C2C;
}
@media (max-width: 1520px){
    .header-text{
        width: 100%;
    }
}
@media screen and (min-width: 1200px) and (max-width: 1440px) {
    .header {
        height: 563px;
    }

    .header-text h1 {
        width: 60% !important;
        font-size: 55px;
        line-height: 55px;
    }

    .header-text h1 span {
        font-size: 65px;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
    .header {
        height: 465px;
    }

    .header-text {
        padding: 0 0 0 60px;
    }

    .header-text h1 {
        width: 54%;
        font-size: 42px;
        line-height: 50px;
        word-spacing: 1px;
    }

    .header-text h1 span {
        font-size: 45px;
    }

    .btn {
        padding: 6px 9px;
        font-size: 14px !important;
    }
}

@media screen and (min-width: 900px) and (max-width: 1000px) {
    .header {
        height: 580px;
    }

    .header-text {
        padding: 0 0 0 60px;
    }

    .header-text h1 {
        width: 54%;
        font-size: 42px;
        line-height: 50px;
        word-spacing: 1px;
    }

    .header-text h1 span {
        font-size: 45px;
    }

    .btn {
        padding: 6px 9px;
        font-size: 14px !important;
    }
}

@media screen and (min-width: 756px) and (max-width: 900px) {
    .header {
        height: 520px;
    }

    .header-text {
        padding: 0 0 0 50px;
    }

    .header-text h1 {
        width: 500px;
        font-size: 50px;
        line-height: 50px;
        word-spacing: 1px;
    }

    .header-text h1 span {
        font-size: 55px;
    }

    .btn {
        padding: 6px 9px;
        font-size: 14px !important;
    }

    .header-text h3 {
        font-size: 20px;
        margin: 0 0 10px 0px;
    }
}

@media screen and (min-width: 576px) and (max-width: 756px) {
    .header {
        height: 480px;
    }

    .header-text {
        padding: 0 0 0 40px;
    }

    .header-text h1 {
        width: 550px;
        font-size: 50px;
        line-height: 50px;
        word-spacing: 1px;
    }

    .header-text h1 span {
        font-size: 55px;
    }

    .btn {
        padding: 6px 9px;
        font-size: 14px !important;
    }

    .header-text h3 {
        font-size: 20px;
        margin: 0 0 10px 0px;
    }
}

@media (max-width: 576px) {

    .header {
        height: 350px;
        background: #000 !important;
    }

    .header-text {
        padding: 0 20px 0 0;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .header-text h4 {
        display: block;
        font-size: 25px;
        margin: 0 0 5px 0px;
        color: white;
    }

    .header-text h1 {
        width: 298px;
        font-size: 17px;
        text-align: right;
        margin: 0 0 25px 0;
    }

    .header-text h1 span {
        font-size: 18px;
    }

    .header-text h3 {
        display: none;
    }

    .btn {
        display: none;
    }
}

@media (max-width: 300px) {

    .header {
        height: 230px;
    }

    .header-text h1 {
        width: 100%;
    }

    .header-text h4 {
        font-size: 20px;
    }
    .header-text h1{
        font-size: 10px;
    }
    .header-text h1 span{
        font-size: 12px;
    }
}</style>