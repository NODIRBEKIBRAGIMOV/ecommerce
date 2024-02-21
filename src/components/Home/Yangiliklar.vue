<template>
    <div class="yangiliklar">
        <div class="news-blok">
            <div class="news_block_l" v-motion-slide-visible-once-left>
                <div class="news_block_title">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">Yangiliklar</font>
                    </font>
                </div>
                <div class="news_block_subtitle">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">MAREVO haqidagi so'nggi yangiliklarni o'qing</font>
                    </font>
                </div>
                <div class="news_block_a">
                    <a href="#">
                        Barcha yangiliklar
                    </a>
                </div>
            </div>
            <div class="news_block_r">
                <div class="blog-post-info" v-motion-slide-visible-once-left>
                    <div class="info-post">
                        <div class="info default-date">
                            15.03.2023
                        </div>
                    </div>
                    <h4 class="post-name">
                        <a href="#" title="MAREVO Abarkasning yangi ranglari">
                            MAREVO Abarkasning yangi ranglari
                        </a>
                    </h4>
                    <div class="blog_post_desc">
                        &nbsp; MAREVO abarkalarning yangi ranglarini taqdim etadi ...
                    </div>
                </div>
                <div class="blog-post-info" v-motion-slide-visible-once-top>
                    <div class="info-post">
                        <div class="info default-date">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">
                                    05.09.2021
                                </font>
                            </font>
                        </div>
                    </div>
                    <h4 class="post-name"><a
                            href="https://marevo.style/news/%d0%bd%d0%b0%d1%88%d0%b8-%d0%b2%d0%b0%d0%bb%d0%b5%d0%bd%d0%ba%d0%b8-%d0%b1%d0%be%d1%82%d0%b8%d0%bd%d0%ba%d0%b8-%d0%b8-%d1%82%d0%b0%d0%bf%d0%be%d1%87%d0%ba%d0%b8-%d0%bd%d0%b0-%d0%bezon-wildberries/"
                            title="Ozon, Wildberries va YandexMarket-da bizning kigiz etiklarimiz, etiklarimiz va shippaklarimiz">
                            Ozon, Wildberries va YandexMarket-da bizning kigiz
                            etiklarimiz, etiklarimiz va shippaklarimiz
                        </a>
                    </h4>
                    <div class="blog_post_desc">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                &nbsp; MAREVO kigiz etiklar, etiklar va boshqalarni sotishni boshlaydi ...
                            </font>
                        </font>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.yangiliklar {
    width: 1420px;
    height: auto;
    margin: 45px auto 55px auto;
}

p {
    color: black !important;
}

a {
    text-decoration: none !important;
    color: #6b6b6b;
}

.news-blok {
    width: 100%;
    color: black;
    display: flex;
    flex-wrap: wrap;
}

/* ...news_block_l start... */
.news_block_l {
    margin: 0;
}

.news_block_title {
    font-size: 24px;
    color: #2c2c2c;
    margin-bottom: 8px;
}

.news_block_subtitle {
    color: #2c2c2c;
    font-size: 18px;
    margin-bottom: 13px;
}

.news_block_a a {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid #c3c3c3;
    transition: all .3s;
    color: rgb(72, 71, 71);
}

.news_block_a a:hover {
    border-color: #6b6b6b;
}

/* ...news_block_r start... */
.news_block_r {
    display: flex;
    margin: 0 0 0 15px;
    gap: 10px;
}

.blog-post-info {
    width: 244px;
    margin: 0 0 0 10px;
    color: #6b6b6b;
}

.blog_post_desc {
    font-size: 17px;
}

.post-name {
    font-size: 19px;
}

.post-name a {
    line-height: 30px;
}

@media (max-width: 1420px) {
    .yangiliklar {
        width: 100%;
    }
    .news-blok{
        padding: 20px;
    }
}

@media (max-width:880px) {
    .news-blok{
        padding: 20px;
    }
    .news_block_r{
        margin-top: 25px;
    }
    .blog-post-info {
        width: 50% !important;

    }
}
@media (max-width:576px){
    .news-blok{
        padding: 15px;
    }
    .news_block_r{
        flex-direction: column;
        gap: 15px;
    }
    .blog-post-info{
        width: 100% !important;
    }
}
</style>