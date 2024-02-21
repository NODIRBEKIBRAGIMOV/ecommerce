<template>
    <div class="kontaktlar">
        <div class="kontaktlar-title">
            <h1>Kontaktlar</h1>
            <p><a href="#" class="router-a">
                    <RouterLink to="/">Uy</RouterLink>
                </a> / Kontaktlar</p>
        </div>
        <div class="kontaktlar-blok">
            <div class="bloks">
                <div class="bloks-left">
                    <div class="bloks-left-content">
                        <div class="information">
                            <h3>Bog'lanish uchun ma'lumot</h3>
                        </div>
                        <div class="information-blok">
                            <ul>
                                <li><span>Pochta:</span>
                                    <font>marevokzn@yandex.ru</font>
                                </li>
                                <li><span>Manzil:</span>
                                    <font>Tatariston Respublikasi, Qozon shahri, Br.Petryaevyh uyi 5-bino 1, 4-qavat, 416-uy
                                    </font>
                                </li>
                                <li><span>Telefon:</span>
                                    <font>+7 (927) 416-33-61</font>
                                </li>
                                <li><span>Ish vaqti:</span>
                                    <font>dushanbadan jumagacha 08:00 dan 17:00 gacha (Moskva vaqti bilan)</font>
                                </li>
                            </ul>
                        </div>
                        <div class="information">
                            <h3>Bizga yozing</h3>
                        </div>
                        <div class="information-input">
                            <form>
                                <input type="text" placeholder="Ism">
                                <input type="email" placeholder="Pochta">
                                <input type="text" placeholder="Mavzu">
                                <textarea name="xabar" placeholder="Sizning xabaringiz"></textarea>
                                <button>YUBORISH</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="bloks-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2156.8500322800305!2d49.11970857677651!3d55.766720873089405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eac5462f57281%3A0xb92001753edea20e!2z0YPQuy4g0JHRgNCw0YLRjNC10LIg0J_QtdGC0YDRj9C10LLRi9GFLCA1INC60L7RgNC_0YPRgSAxLCA0INGN0YLQsNC2LCA0MTYg0L7RhNC40YEsINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwg0KDQvtGB0YHQuNGPLCA0MjAwMjE!5e1!3m2!1sru!2s!4v1706260950271!5m2!1sru!2s"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
a {
    color: rgb(151, 150, 150);
    text-decoration: none;
}

a:hover {
    color: #000;
}

.kontaktlar {
    width: 1520px;
}

/* ...kontaktlar-title... */
.kontaktlar-title {
    padding: 31px 10px;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.kontaktlar-title h1 {
    color: black;
}

.kontaktlar-title h1,
.kontaktlar-title p {
    margin: 0;
}

/* ...kontaktlar-blok... */
.kontaktlar-blok {
    max-width: 1200px;
    height: 678px;
    margin: 0 auto 95px auto;
}


/* ...bloks... */
.bloks {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #EBEEEE;
}

/* ...bloks-left... */
.bloks-left {
    padding: 33px 30px 30px 269px;
    width: 66%;
}

.bloks-left-content {
    width: 100%;
    height: 100%;
}

.information {
    margin: 0 0 17px 0;
}

.information h3 {
    font-size: 24px;
}

.information-blok ul {
    padding: 0;
}

.information-blok ul li {
    list-style: none;
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

}

.information-blok ul li span {
    margin: 0;
    width: 15%;
}

.information-blok ul li font {
    width: 85%;
}

.information-input input,
.information-input textarea {
    display: block;
    margin: 0 0 15px 0;
    width: 100%;
    border: none;
    border-bottom: 1px solid #EBEEEE;
    outline: none;
    resize: none;
}

.information-input input:hover,
.information-input textarea:hover {
    border-bottom: 1px solid #2c2c2c;
}

.information-input button {
    height: 54px;
    width: 100%;
    padding: 15px 31px;
    margin-top: 30px;
    border: 1px solid #2c2c2c;
    background: #2c2c2c;
    color: white;
}

.information-input button:hover {
    background: #ffffff;
    color: #2c2c2c;
    transition: all 0.5s;
}


/* ...bloks-right... */
.bloks-right {
    width: 44%;
    padding: 0 0 100px 0;
}

@media (max-width: 1520px) {
    .kontaktlar {
        width: 100%;
    }
}

@media (max-width: 1200px) {
    .kontaktlar-blok {
        max-width: 100% !important;
        padding: 45px;
        height: auto;
    }

    .bloks {
        padding: 10px 0 45px 15px;
    }

    .bloks-left {
        padding: 0 5px 0 0;
        width: 60%;
    }

    .bloks-right {
        width: 50%;
        padding: 0;
    }
}

@media (max-width: 765px) {
    .kontaktlar-title {
        text-align: center;
    }

    .kontaktlar-blok {
        padding: 10px;
        height: auto;
    }

    .bloks {
        flex-direction: column;
        gap: 45px;
        padding: 0;
        border: none;
    }

    .bloks-left,
    .bloks-right {
        width: 100%;
    }

    .bloks-right {
        height: 350px;
        padding: 0;
    }
}

@media (max-width: 576px) {
    .kontaktlar-title {
        flex-direction: column;
        gap: 15px;
    }
}</style>