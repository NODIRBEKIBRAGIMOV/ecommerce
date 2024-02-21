<template>
    <div class="comentariya">
        <div class="comentariya-blok">
            <div class="otz_blok_1">
                <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }"
                    :pagination="{ clickable: true, }" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide class="slide" v-motion-slide-visible-once-top>
                        <div class="slide-title">
                            <h3>Oksana</h3>
                        </div>
                        <div class="slide-text">
                            <p>Menga tiqinlar juda yoqdi, rangi ajoyib, va mening o'lchamim 38 bo'lgani uchun omadim keldi
                                va bitta juftlik bizning omborimizda shaxrimizda tugadi, men uni kecha buyurtma qildim va
                                bugun oldim! Chiroyli, yengil, ajoyib!</p>
                        </div>
                        <div class="slide-user">
                            <img src="https://marevo.style/wp-content/uploads/2023/07/pngimg.com-ozon_PNG3.webp" alt="">
                            <h4>OZON</h4>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide" v-motion-slide-visible-once-top>
                        <div class="slide-title">
                            <h3>Tatyana</h3>
                        </div>
                        <div class="slide-text">
                            <p>Sifat?. Abarkasy - mening sevgim?! Men Tavsiya qilaman ? Hajmi o'lcham jadvaliga mos keladi. Sifat?. Abarkasy - mening sevgim?! Men Tavsiya qilaman ?"
                            </p>
                        </div>
                        <div class="slide-user">
                            <img src="https://marevo.style/wp-content/uploads/2023/07/pngimg.com-wildberries_PNG4.webp"
                                alt="">
                            <h4>Yovvoyi mevalar</h4>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide" v-motion-slide-visible-once-bottom>
                        <div class="slide-title">
                            <h3>Helen</h3>
                        </div>
                        <div class="slide-text">
                            <p>Super etiklar. Men allaqachon ikkinchi juftimni olaman. Qishda issiq va qulay! Sifat?. Abarkasy - mening sevgim?! Men Tavsiya qilaman ?</p>
                        </div>
                        <div class="slide-user">
                            <img src="https://marevo.style/wp-content/uploads/2023/07/pngimg.com-ozon_PNG3.webp" alt="">
                            <h4>OZON</h4>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide" v-motion-slide-visible-once-top>
                        <div class="slide-title">
                            <h3>Xalina</h3>
                        </div>
                        <div class="slide-text">
                            <p>Cool vales, men ularni yechmasdan kiyaman! Hajmi bo'yicha! Sifat?. Abarkasy - mening sevgim?! Men Tavsiya qilaman ?</p>
                        </div>
                        <div class="slide-user">
                            <img src="https://marevo.style/wp-content/uploads/2023/07/pngimg.com-wildberries_PNG4.webp"
                                alt="">
                            <h4>Yovvoyi mevalar</h4>
                        </div>
                    </swiper-slide>
                    
                </swiper>
            </div>
            <div class="otz_blok_2" v-motion-slide-visible-once-bottom>
                <h2>Mijozlarimizdan fikr-mulohazalar</h2>
                <p>Mahsulotlarimizga alohida qiymat va ma'no beradigan ilhom va ishonch</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
}
</script>
<style scoped>
.comentariya {
    width: 100%;
    background: #eaeaea;
}

.comentariya-blok {
    width: 1420px;
    height: 369px;
    padding: 30px 0;
    color: black;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* margin: 30px auto 50px auto; */
}

/* otz_blok_1 */
.otz_blok_1 {
    width: 800px;
    height: 100%;
}

.mySwiper {
    width: 100%;
    height: 100%;
}

.slide {
    width: 550px;
    height: auto;
    padding: 45px 65px;
    background: #fff;
}

.slide-title h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333;
}
.slide-text{
    height: 115px;
}
.slide-user{
    display: flex;
    align-items: center;

}
.slide-user img {
    width: 45px;
    margin: 0;
}
.slide-user h4{
    margin: 0 0 0 15px;
    font-size: 18px;
}
/* otz_blok_2 */
.otz_blok_2 {
    text-align: center;
    width: 270px;
    color: #333;
}
.otz_blok_2 h2{
    font-size: 25px;
}

@media screen and (min-width: 1150px) and (max-width: 1440px) {
    .comentariya-blok {
        width: 100% !important;
    }
    .otz_blok_1{
        width: 700px;
    }
}
@media (max-width: 1440px) {
    
    
}

@media (max-width: 1150px) {
    .comentariya-blok {
        width: 100% !important;
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        gap: 25px;
    }
    .otz_blok_2{
        width: auto;
    }
}

@media (max-width: 1025px) {
    .comentariya-blok {
        height: auto;
    }
}

@media (max-width: 800px) {
    .otz_blok_1 {
        width: 100% !important;
        padding: 15px;
    }

    .slide {
        width: 100%;
    }
}</style>