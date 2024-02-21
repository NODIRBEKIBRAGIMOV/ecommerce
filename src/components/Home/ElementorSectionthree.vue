<template>
    <div class="elementorSectionthree">
        <div class="elementor-img">
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img1" v-motion-slide-visible-once-left>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/br-valenki-qa5w3o8e2w7rd6k1iock4l9gejyfhpd6swo7egqzlk.webp"
                    title="br-valenki" alt="br-valenki" loading="lazy">
            </a>
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img2" v-motion-slide-visible-once-top>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/photo_2023-02-22-13.58.16-q2j9azy4chqxedbnglq2llm7sxspysib4x3c8wrp8o-qa5w4sng8rr38exbyntilt29y4f7ootnagq31d3260.webp"
                    title="photo_2023-02-22-13.58.16-q2j9azy4chqxedbnglq2llm7sxspysib4x3c8wrp8o"
                    alt="photo_2023-02-22-13.58.16-q2j9azy4chqxedbnglq2llm7sxspysib4x3c8wrp8o" loading="lazy">
            </a>
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img3" v-motion-slide-visible-once-right>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/NTS05484-qa5w66gwaznabqwyvrcqryhpfjlo0nbf5bath11708.webp"
                    title="NTS05484" alt="NTS05484" loading="lazy">
            </a>
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img4" v-motion-slide-visible-once-left>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/DSC09759-qa5w782fwd2r85ecs7ltjp056ygckjgomhe8o3hg3c.webp"
                    title="DSC09759" alt="DSC09759" loading="lazy">
            </a>
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img5"
                v-motion-slide-visible-once-bottom>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/08812121-1-qa5w8mtq5f08n3cmjtjoac719ri64726tgmgl1e6rc.webp"
                    title="08812121-1" alt="08812121-1" loading="lazy">
            </a>
            <a href="https://instagram.com/marevo_shoes?igshid=YmMyMTA2M2Y=" class="img6" v-motion-slide-visible-once-right>
                <div class="blog">
                    <i class='bx bxl-instagram'></i>
                    <span>Bizni instagramda kuzatip boring</span>
                </div>
                <img decoding="async"
                    src="https://marevo.style/wp-content/uploads/elementor/thumbs/photo_2023-02-22-13.58.22-q2j9chix61s9s55trqvt1q3hnwgn5jf0caa0lok9e0-qa5waii3thkvv0mbkmst9v481i8lieiv2rlf4ylubc.webp"
                    title="photo_2023-02-22-13.58.22-q2j9chix61s9s55trqvt1q3hnwgn5jf0caa0lok9e0" alt="85-015-11"
                    loading="lazy">
            </a>
        </div>
        <div class="elementor-text">
            <div class="description-position-bottom">
                <h3 class="heading-title" v-motion-slide-visible-once-top>MAREVO QUYLI VA ZOZONLI OYUBBIY OLAMINI KASHF ET
                </h3>
                <p class="description" v-motion-slide-visible-once-top>Biz siz uchun qulay va ko'p qirrali kundalik
                    uslubdagi poyabzallarni yaratamiz.
                    Sifat, yengillik va estetikaning uyg'un kombinatsiyasi har bir qadamingizni qulaylik bilan to'ldiradi.
                </p>
            </div>
            <div class="elementor-button-wrapper" v-motion-slide-visible-once-top>
                <a href="#" role="button">
                    <span class="elementor-button-text">
                        #MAREVO
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.elementorSectionthree {
    width: 1420px;
    height: auto;
    display: flex;
    column-gap: 25px;
    align-items: center;
    justify-content: space-between;
    margin: 150px auto;
}

.elementor-img {
    width: 59% !important;
    height: 100%;
    display: grid;
    grid-template-areas: 'img1 img2 img3'
        'img4 img5 img6';
}

.elementor-img a {
    position: relative;
    overflow: hidden;
}

.elementor-img a:hover .blog {
    opacity: 1;
    transform: translateY(0px);
    transition: all 1s;
}

.blog {
    position: absolute;
    transform: translateY(-50px);
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0;
    animation-name: blog;
    animation-duration: all 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.blog i {
    font-size: 90px;
    color: black;
}

.blog span {
    color: black;
    font-size: 17px;
}

@keyframes blog {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.elementor-img img {
    width: 100%;
    height: 100%;
}

.img1 {
    grid-area: img1;
}

.img2 {
    grid-area: img2;
}

.img3 {
    grid-area: img3;
}

.img4 {
    grid-area: img4;
}

.img5 {
    grid-area: img5;
}

.img6 {
    grid-area: img6;
}

.elementor-text {
    width: 35% !important;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}



.heading-title {
    padding: 0 30px 0 0;
    font-size: 30px;
    line-height: 42px;
    letter-spacing: 1px;
    margin-bottom: 26px;
    color: #2c2c2c;
}

.description {
    padding: 0 15px 0 0;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: #777;
}

.elementor-button-wrapper {
    position: relative;
    margin-right: 0;
}

.elementor-button-wrapper a {
    text-decoration: none;
}

.elementor-button-text {
    color: #2c2c2c;
    font-size: 28px;
}

.elementor-button-text::before {
    content: "";
    height: 1px;
    width: 60px;
    background: #2c2c2c;
    position: absolute;
    bottom: 10px;
    left: -70px;
}

@media (max-width: 1420px) {
    .elementorSectionthree {
        width: 100%;
        padding: 0 35px;
        align-items: flex-start;
    }

    .blog i {
        font-size: 60px;
    }

    .blog span {
        font-size: 15px;
        text-align: center;
    }

    .elementor-img {
        width: 50% !important;
    }
}

@media (max-width: 1025px) {
    .elementorSectionthree {
        height: auto;
        padding: 0;
        align-items: center;
        display: grid;
        grid-template-areas: 'blok2'
                             'blok1';
        gap: 45px;
    }

    .elementor-img {
        width: 90% !important;
        gap: 0;
        margin: 0 auto;
        display: grid;
        grid-area: blok1;
    }

    .elementor-text {
        width: 85% !important;
        grid-area: blok2;
    }
}

@media (max-width: 766px) {
    .elementor-img {
        width: auto !important;
        height: auto;
        grid-template-areas: 'img1 img2'
            'img3 img4'
            'img5 img6';
    }

    .elementor-img img {
        width: 100%;
        height: 100% !important;
    }
}

@media (max-width: 576px) {
    .elementorSectionthree {
        margin: 120px 0;
    }
}</style>