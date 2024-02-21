<template>
    <div class="menu">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <i class='bx bx-menu-alt-left'></i>
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Ayollar
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Ayollar kigiz poyabzali</p>
                                <p>Teri poyabzal</p>
                                <p>Ayollar kigiz etiklari</p>
                                <p>Yozgi oyoq kiyimlari</p>
                                <p>Shippak</p>
                                <p>Krossovkalar</p>
                                <p>Ayollar uchun EVA poyabzal</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Erkaklar
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="ulli2">
                                    <p>Botinkalar</p>
                                    <p>Kigizdan tikilgan erkaklar poyabzali</p>
                                    <p>Erkaklar kigiz etiklari</p>
                                    <p>Ichki poyabzal</p>
                                    <p>PREMIUM</p>
                                    <p>Erkaklar uchun EVA poyabzal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <RouterLink to="/katalog"><p class="xp" data-bs-dismiss="offcanvas">Katalog</p></RouterLink>
                    <RouterLink to="/about"><p class="xp" data-bs-dismiss="offcanvas">Marevo Haqida</p></RouterLink>
                    <RouterLink to="/kontaktlar"><p class="xp" data-bs-dismiss="offcanvas">Kontaktlar</p></RouterLink>
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
.menu{
    z-index: 100;
}
.btn-primary {
    border: none;
    background: none;
    position: absolute;
    left: 0;
    top: 15px;
}

.btn-primary i {
    font-size: 45px;
    color: black;
}

@media (max-width: 576px) {
    .btn-primary i {
        font-size: 35px;
    }

    .offcanvas {
        width: 100%;
    }
}
.offcanvas{
    background-color: rgb(182, 180, 180);
    
}

.offcanvas-header {
    padding: 15px 30px;
    width: 100%;
    background: #fff;
}

.offcanvas-title {
    margin: 0;
}

.dropdown-toggle {
    width: 100% !important;
}

.accordion-button {
    background-color: rgb(182, 180, 180);
}

.offcanvas-body {
    width: 100%;
    padding: 0 8px;
}
a{
    color: black;
    border-bottom: 1px solid rgb(224, 220, 220);
    display: block;
    background-color: rgb(182, 180, 180);
    padding: 15px 20px;
    text-decoration: none;
}
.xp{
    margin: 0;
}
/* .btns{
    display: block;
    width: 0;
    height: auto;
    border: none;
    background: none;
    padding: 0;
    margin: 0 0 0 -20px;
}
.btns a{
    border: none;
} */

</style>