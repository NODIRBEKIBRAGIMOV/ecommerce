<template>
  <div class="about">
    <div class="site-main">
      <div class="site-main-img">
        <img src="https://marevo.style/wp-content/uploads/2023/02/NTS04517-scaled.jpg" alt="">
      </div>
      <div class="site-main-text">
        <h1>MAREVO poyabzal fabrikasi</h1>
        <div class="p-text">
          <p>Haqiqiy charmdan ayollar va erkaklar poyabzali, kigizdan va tabiiy mo‘ynadan ekologik toza mahsulotlar ishlab
            chiqaramiz.</p>
          <p>Jamoamiz ko‘p yillik tajribaga ega texnologlar, poyabzalchilar va tikuvchilardan iborat. Har bir juftlik
            Evropa standartlarini hisobga olgan holda yuqori darajadagi nazoratdan o'tadi. To'plamlar doimiy ijodiy
            izlanishda bo'lgan mutaxassislar tomonidan yaratilgan.</p>
          <p>Ishlab chiqarishda moda tendentsiyalarini hisobga oladigan ishlanmalardan foydalaniladi. Ustalar har bir
            elementga o'z mahoratini, mahoratini va qalbining bir qismini qo'shadilar. Konfor standarti MAREVO
            poyafzallari bo'lib, u Yevropa dizayni, texnologiyasi an'analarini, shuningdek, yevropalik xaridor
            standartlarini o'zida mujassam etgan.</p>
          <p><i>Eksklyuziv dizayn va qo'l san'ati bizning brendimizning asosini tashkil etadi.</i></p>
        </div>
        <div class="button">
          <RouterLink to="/katalog"><button>KATALOG</button></RouterLink>
          <RouterLink to="/kontaktlar">BIZ BILAN BOG'LANISH</RouterLink>
        </div>
      </div>
    </div>
    <div class="oyoq-kiyim-sifati">
      <div class="sifat-title">
        <h1>Oyoq kiyimimizning afzalliklari</h1>
      </div>
      <div class="sifat-blok">
        <div class="bloks">
          <i class='bx bx-heart'></i>
          <p>Oxirgi qulay</p>
        </div>
        <div class="bloks">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3CUbyh731_ewpFumBizKSFZhK2JdKCyPAA&usqp=CAU"
            alt="">
          <p>Yuqori sifatli va tabiiy materiallar</p>
        </div>
        <div class="bloks">
          <i class='bx bx-palette'></i>
          <p>Zamonaviy dizayn</p>
        </div>
        <div class="bloks">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3CUbyh731_ewpFumBizKSFZhK2JdKCyPAA&usqp=CAU"
            alt="">
          <p>Qulaylik</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* ...about site-main... */
.site-main {
  max-width: 1200px;
  width: 100%;
  height: 764px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* ...aboout site-main img... */
.site-main-img {
  width: 510px;
  height: 764px;
  overflow: hidden;
}

.site-main-img img {
  width: 100%;
}

.site-main-img img:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

/* ...about site-main text... */
.site-main-text {
  width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* ...about site-main text h1... */
.site-main-text h1 {
  color: #2c2c2c;
  font-size: 49px;
  padding: 0 20px 0 0;
}

/* ...about site-main text p... */
.p-text p {
  color: #707070;
  padding: 0 50px 0 0;
}

/* ...about site-main button... */
.button {
  margin: 25px 0 0 0;
}

.button button {
  background: #2c2c2c;
  border: 1px solid white;
  color: white;
  margin: 0;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0.6px;
  padding: 12px 30px 12px 30px;
}

.button a {
  text-decoration: none;
}

.button button:hover {
  background: white;
  color: #2c2c2c;
  border: 1px solid #2c2c2c;
}

.button a:nth-child(2) {
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 0.6px;
  fill: #202020;
  color: #202020;
  background-color: #FFFFFF;
  padding: 12px 20px 12px 20px;
  margin: 0;
}

/* ...oyoq-kiyim-sifati... */
.oyoq-kiyim-sifati {
  width: 1520px;
  height: 280px;
  margin: 100px 0;
  padding: 30px 0px 0px 0px;
  display: flex;
  flex-direction: column;
}

.sifat-title h1 {
  color: #2c2c2c;
  font-size: 49px;
  margin: 0 0 25px 0;
  text-align: center;
}

.sifat-blok {
  width: 1520px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.bloks {
  width: 100%;
  padding: 15px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.bloks i {
  font-size: 55px;
}

.bloks img {
  width: 60px;
}

@media (max-width: 1520px) {
  .site-main {
    width: 100%;
  }

  .oyoq-kiyim-sifati {
    width: 100%;
    height: auto;
  }

  .sifat-blok {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .site-main {
    flex-direction: column !important;
    gap: 55px;
    height: auto;
    max-width: 100% !important;
  }

  .site-main-img {
    width: 100%;
    height: auto;
  }

  .site-main-text {
    width: 100%;
    text-align: left;
  }

  .site-main-text h1 {
    margin: 0;
    padding: 0 185px 0 0 !important;
    font-size: 75px;
  }
}

@media (max-width: 765px) {
  .oyoq-kiyim-sifati {
    gap: 25px;
  }

  .site-main-text h1 {
    font-size: 35px;
    padding: 0 55px 20px 0 !important;
  }

  .sifat-blok {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
  }
}

@media (max-width: 576px) {
  .site-main-text h1 {
    padding: 0 !important;
  }

  .button button {
    display: block;
    margin: 0 0 20px 0;
  }

  .sifat-title h1 {
    font-size: 35px;
  }
}</style>
