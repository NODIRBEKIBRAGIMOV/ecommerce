<template>
    <div class="nav">
        <div class="menus">
            <Menu />
        </div>
        <ul>
            <li class="ul-hover-won"><a href="#">Ayollar</a>
                <div class="ulli1">
                    <p>Ayollar kigiz poyabzali</p>
                    <p>Teri poyabzal</p>
                    <p>Ayollar kigiz etiklari</p>
                    <p>Yozgi oyoq kiyimlari</p>
                    <p>Shippak</p>
                    <p>Krossovkalar</p>
                    <p>Ayollar uchun EVA <br> poyabzal</p>
                </div>
            </li>
            <li class="ul-hover-two"><a href="#">Erkaklar</a>
                <div class="ulli2">
                    <p>Botinkalar</p>
                    <p>Kigizdan tikilgan erkaklar <br> poyabzali</p>
                    <p>Erkaklar kigiz etiklari</p>
                    <p>Ichki poyabzal</p>
                    <p>PREMIUM</p>
                    <p>Erkaklar uchun EVA <br> poyabzal</p>
                </div>
            </li>
            <li><RouterLink to="/katalog">Katalog</RouterLink></li>
            <li><RouterLink to="/about">Marevo H</RouterLink></li>
            <li><RouterLink to="/kontaktlar">Kontaktlar</RouterLink></li>
        </ul>
        <RouterLink to="/"><img class="morevo-img" src="https://marevo.style/wp-content/uploads/elementor/thumbs/cropped-logo_q16-q2kuzmtrm83y8kgfzggx92aujroehfrge7gm8wsabu.png" alt="error"></RouterLink>
        <div class="widget-wrap">
            <div class="mobile-show d-flex items-center">
                <UserBtn />
                <RouterLink to="/Sevimlilar"><i class='bx bx-heart'></i></RouterLink>
                <KorzinkaBtn />
            </div>
            <p>
                <i class='bx bxs-phone'></i>
                <a href="+7 (927) 416-33-61">+7 (927) 416-33-61</a>
            </p>
            <div class="btn"><a href="https://vk.com/marevokazan"><i class='bx bxl-vk'></i></a></div>
            <div class="btn btns"><a href="https://t.me/marevokazan"><i class='bx bxl-telegram'></i></a></div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import Menu from './Menu.vue';
import KorzinkaBtn from './Ui component/KorzinkaBtn.vue';
import UserBtn from './Ui component/UserBtn.vue'
export default {
    components: { Menu, KorzinkaBtn, UserBtn }
}
</script>
<style scoped>
.nav {
    width: 1520px !important;
    height: 86px;
    padding: 0 90px 0 90px;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
}

.nav .menus {
    display: none;
}

ul {
    position: relative;
    width: fit-content;
    padding: 0;
    margin: 0;
    display: flex;
}

ul li {
    list-style: none;

}

ul li a {
    text-decoration: none;
    text-transform: capitalize;
    color: #7da2b4;
    font-size: 18px;
    display: block;
    padding: 6px 12px;
    position: relative;
}

/* ul li a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #2C2C2C;
    transform: scaleX(0);
    transform-origin: right;
    transition: all 0.3s;
} */

ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #2C2C2C;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s;
}

ul li a:hover {
    color: #2C2C2C;
}

ul li a:hover:before,
ul li a:hover:after {
    transform: scaleX(1) !important;
}

.ul-hover-won:hover .ulli1 , .ul-hover-two:hover .ulli2 {
    display: block !important;
    animation-name: li;
    animation-duration: 1s;
}

.ulli1,.ulli2 {
    position: absolute;
    display: none !important;
    flex-direction: column !important;
    left: 0;
    padding: 15px 25px;
    background-color: #fff;
}
@keyframes li{
    0%{
        transform: translateY(16px);
    }
    100%{
        transform: translateY(2px);
    }
}

.ulli1 p,
.ulli2 p {
    position: relative;
    cursor: pointer;
    margin: 20px 0;
    color: #7da2b4;
    font-weight: 400;
    display: block;
}

.ulli1 p::after,
.ulli2 p::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #2C2C2C;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s;
}

.ulli1 p:hover:after,
.ulli2 p:hover:after {
    transform: scaleX(1) !important;
}

.ulli1 p:hover,
.ulli2 p:hover {
    color: #2c2c2c;
}

.ulli2 {
    left: 80px;
}

/* .morevo-img {
    margin: 0;
} */
.mobile-show {
    padding-right: 10px;
}

.mobile-show i {
    color: #7777779c;
    font-size: 22px;
    margin: 0 5px;
    cursor: pointer;
}

.mobile-show i:hover {
    color: #777;
}



.widget-wrap {
    margin-right: 15px;
    display: flex;
    align-items: center;
}

.widget-wrap p {
    color: #777777;
    font-family: sans-serif;
    font-size: 16px;
    display: block !important;
    margin: 0;
}

.widget-wrap p i {
    font-size: 25px;
    transform: rotate(15deg);
}

.widget-wrap p a {
    margin-left: 5px;
    text-decoration: none;
    color: #777777;
}

.widget-wrap p a:hover {
    color: #111;
}

.btn {
    padding: 4px 6px;
    display: block;
    margin-left: 5px;
    background-color: #45668e;
}

.btns {
    background-color: #2ca5e0 !important;
}

.btn i {
    font-size: 25px;
    color: white;
}

@media (max-width: 1520px) {
    .nav {
        width: 100% !important;
    }
}

@media (max-width: 1025px) {
    .nav {
        width: 100%;
        padding: 0 30px 0 30px;
    }

    .nav ul {
        display: none;
    }

    .nav .menus {
        display: block;
    }

    .morevo-img {
        width: 130px;
    }

    .mobile-show {
        display: none !important;
    }
}

@media (max-width: 576px) {
    .nav {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        height: 100px;
    }

    .btn {
        padding: 2px 4px;
    }

    .btn i {
        font-size: 18px;
    }

    .morevo-img {
        width: 120px;
    }

    .widget-wrap {
        margin: 0 0 10px 0;
    }
}

@media screen and (min-width: 1100px) and (max-width:1440px) {
    .nav {
        padding: 0 40px;
    }

    .widget-wrap {
        margin: 0 !important;
    }
}
</style>