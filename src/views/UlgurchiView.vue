<template>
    <div class="containers">
        <div class="containers-title">
            <h1>Ulgurchi</h1>
            <p><a href="#" class="router-a"><RouterLink to="/">Uy</RouterLink></a> / Ulgurchi</p>
        </div>
        <div class="containers-blok">
            <span>
                Siz o'z biznesingizni tabiiy materiallardan tikilgan poyabzal bilan yurityapsizmi yoki
                rejalashtiryapsizmi? <br>
                Biz sizga Rossiyadagi zavodlarning rasmiy vakili - Marevodan professional hamkorlikni taklif qilishga
                tayyormiz. <br>
                Marevo muvaffaqiyati sifatga asoslanadi. Bu nafaqat mahsulot sifatiga, balki ishlab chiqarish jarayoni,
                boshqaruv va boshqaruv sifatiga ham tegishli. Marevo bilan hamkorlik qiling!
            </span>
            <span>
                Marevo kompaniyasi o'z mijozlariga g'amxo'rlik qiladi va ularga eng yuqori sifat talablariga javob beradigan
                poyabzallarni taklif qiladi. Mahsulotlarimiz haqiqiy teri, kigiz va mo'ynadan tayyorlangan bo'lib, ular
                atrof-muhitga zarar etkazmaydi. Bizning jamoamiz poyabzal yaratishda katta tajriba va iste'dodga ega bo'lgan
                mutaxassislardan iborat. Biz ishlab chiqarishning har bir bosqichini nazorat qilamiz va poyabzallarimiz
                Yevropa standartlariga mos kelishini ta'minlaymiz. Shuningdek, biz moda tendentsiyalari va mijozlarimizning
                ehtiyojlarini hisobga olamiz, ijodkorligimiz va shaxsiyatimizni aks ettiruvchi to'plamlarni yaratamiz.
                Bizning MAREVO poyafzallarimiz Yevropa dizayni, texnologiyasi va qulayligi uyg‘unligidir. Bizning brendimiz
                eksklyuziv dizayn va qo'l san'atiga asoslangan bo'lib, bu bizning poyabzalimizga o'ziga xoslik va uslubni
                beradi.
            </span>
            <div class="bloks">
                <div class="form">
                    <h2>Bizga yozing</h2>
                    <form>
                        <input type="text" placeholder="Ism">
                        <input type="email" placeholder="Pochta">
                        <input type="text" placeholder="Telefon">
                        <input type="text" placeholder="Tashkilot nomi">
                        <textarea id="textarea" placeholder="Sizning xabaringiz"></textarea>
                        <div class="btn-group">
                            <button type="submit" class="btn btn-outline-primary p-3 mt-5 border border-black">Yuborish</button>
                            <button type="reset" style="background-color: black;" class="text-white btn mt-5 border">Tozalash</button>
                        </div>
                    </form>
                </div>
                <div class="malumot">
                    <h2>Bog'lanish uchun ma'lumot</h2>
                    <div class="content">
                        <div class="contents">
                            <span>Pochta:</span>
                            <p>marevokzn@yandex.ru</p>
                        </div>
                        <div class="contents">
                            <span>Manzil:</span>
                            <p>Tatariston Respublikasi, Qozon, 120A, Technicheska ko'chasi, 2-qavat, 222-ofis</p>
                        </div>
                        <div class="contents">
                            <span>Telefon:</span>
                            <p>+7 (927) 416-33-61</p>
                        </div>
                        <div class="contents">
                            <span>Ish vaqti:</span>
                            <p>Dushanba - Juma 08:00 dan 17:00 gacha ( dushanba)</p>
                        </div>
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
.containers-blok span {
    color: #707070;
    display: block;
    font-size: 17px;
    margin: 0 0 25px 0;
}

.bloks {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 55px;
}

.form {
    width: 100%;
}

.form form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 35px;
}

form input {
    width: 100%;
    height: 38px;
    border: 1px solid #ebeeee;
    border-radius: 3px;
    padding: 0 15px;
    font-size: 17px;
    background: 0 0;
    color: #707070;
    margin-bottom: 30px;
    outline: none;
}

form textarea {
    border: 1px solid #ebeeee;
    outline: none;
    border-radius: 3px;
    padding: 20px 15px 20px 15px;
}

input:hover,
textarea:hover {
    border: 1px solid black;
    transition: all 0.5s;
}

.btn-group {
    width: 60%;
    margin: 0;
    gap: 45px;
}

form button {
    color: black;
    border-radius: 0;
}

.contents {
    display: flex;
}

.contents span {
    font-size: 16px;
    color: #0c0a1c;
    font-weight: 800;
}

.contents p {
    margin: 0 0 0 5px;
    font-weight: 100;
}

@media (max-width: 765px) {
    .bloks {
        grid-template-columns: 1fr;
    }
}</style>