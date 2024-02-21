<template>
    <div class="kafolat containers">
        <div class="kafolat-title">
            <h1>Kafolat Va Qaytarish</h1>
            <p><a href="#" class="router-a"><RouterLink to="/">Uy</RouterLink></a> / Kafolat Va Qaytarish</p>
        </div>
        <div class="kafolat-blok">
            <p>Marevo poyabzal fabrikasi o'z mahsulotlarini ishlab chiqarish uchun ishonchli etkazib beruvchilarning
                materiallaridan foydalanadi va ishlab chiqarish nazorati ustidan qattiq nazoratni amalga oshiradi va shu
                bilan sifatsiz poyabzal ishlab chiqarish xavfini kamaytiradi.</p>
            <p>Biz mahsulotlarimiz uchun kafolat beramiz, shuning uchun bunday muammoga duch kelsangiz, iltimos, bizga xabar
                bering va biz uni tezda hal qilamiz.</p>
            <p>Oyoq kiyimlarini qaytarish/almashtirish uchun (14 kun ichida) quyidagi shartlarga rioya qilish kerak:</p>
            <ul>
                <li>poyabzal ishlatilmagan (kiyilgan);</li>
                <li>Tekshirish;</li>
                <li>mahsulot tashqi ko'rinishini saqlab qoldi;</li>
                <li>barcha zavod yorliqlari joyida;</li>
                <li>belgilash kodi.</li>
            </ul>
            <p>Nosoz poyabzallarni qaytarish/almashtirish uchun siz qaytarish/almashtirish arizasini to'ldirishingiz kerak .</p>
            <b><i>Belgilangan kodning mavjudligi majburiy bo'lishi kerak!</i></b>
            <br><br>
            <p>Poyafzal quyidagi hollarda nuqsonli hisoblanadi:</p>
            <ul>
                <li>moddiy yoriqlar va aniq tanaffuslar;</li>
                <li>taglik va tovonning deformatsiyasi;</li>
                <li>tikuvlar yo'q;</li>
                <li>poyabzalning normal ishlashiga xalaqit beradigan va ularning estetikasini buzadigan har qanday boshqa
                    omillar.</li>
            </ul>
            <p>Marevo poyafzal fabrikasi mahsulotlari uchun kafolat muddati tovar mijozga yetkazib berilgan kundan boshlab
                30 kalendar kunni tashkil etadi*. Va tegishli mavsum boshidan hisoblab chiqiladi. Mavsumning boshlanish
                sanasi Rossiya Federatsiyasining ta'sis sub'ektlariga muvofiq, iste'molchilarning joylashuvi iqlim
                sharoitiga qarab belgilanadi.</p>
            <p>Tatariston Respublikasining "Iste'molchilarning huquqlarini himoya qilish to'g'risida"gi qonuniga muvofiq,
                mahalliy iqlim sharoitlarini hisobga olgan holda, respublika hududida mavsumiy tovarlarning kafolat muddati
                va xizmat ko'rsatish muddatini belgilash uchun quyidagi mavsumiy davrlar belgilandi. Tatariston:</p>
            <ul>
                <li>qish - 16 noyabrdan 15 martgacha</li>
                <li>bahor - 16 martdan 15 maygacha</li>
                <li>yoz - 16 maydan 31 avgustgacha</li>
                <li>kuz - 1 sentyabrdan 15 noyabrgacha</li>
            </ul>
            <p>* Eksklyuziv, individual buyurtmalar almashtirilmaydi yoki qaytarilmaydi.</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.kafolat-blok{
    margin-bottom: 105px;
}
a{
    text-decoration: none;
    color: #707070;
}
a:hover{
    color: #000;
}
i {
    padding: 0 0 45px 0;
    font-size: 17px;
}

.kafolat-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.kafolat-title h1 , .kafolat-title p{
    margin: 0;
}


@media (max-width: 765px) {
    .kafolat-title h1 {
        text-align: center;
    }
}
</style>