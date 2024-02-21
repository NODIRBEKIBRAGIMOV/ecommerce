<template>
    <div class="main-sidebar-right">
        <div class="widget woocommerce widget_product_categories">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item border-bottom border-secondary pb-3">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Kategoriyalar
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <a href="#" class="router-a" @click="filterHandler('all')">Kategoriyasiz</a>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo" @click="filterHandler('popular')">
                                        <a href="#" class="router-a">Ayollar</a>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                    <div class="accordion-body px-3">
                                        <a href="#" class="router-a">Shippak</a>
                                        <a href="#" class="router-a">Ayollar Kigiz Etiklari</a>
                                        <a href="#" class="router-a">Krossovkalar</a>
                                        <a href="#" class="router-a">Teri Poyabzal</a>
                                        <a href="#" class="router-a">Yozgi Oyoq Kiyim</a>
                                        <a href="#" class="router-a">Ayollar Kigiz Poyabzali</a>
                                        <a href="#" class="router-a">Ayollar Uchun EVA Poyabzal</a>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree">
                                        <a href="#" class="router-a" @click="filterHandler('erkaklar')">Erkaklar</a>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body px-3">
                                        <a href="#" class="router-a">PREMIUM</a>
                                        <a href="#" class="router-a">Botinkalar</a>
                                        <a href="#" class="router-a">Erkaklar Kigiz Etiklari</a>
                                        <a href="#" class="router-a">Ichki Poyabzal</a>
                                        <a href="#" class="router-a">Kigizdan Tikilgan Erkaklar Poyabzali</a>
                                        <a href="#" class="router-a">Erkaklar Uchun EVA Poyabzal</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pt-5">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseFour">
                            Rang
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <form>
                                <span><input type="checkbox">
                                    <p>Bej</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Oq</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Oq+firuza </p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Oq + marjon</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Oq+qora</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Turkuaz</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Turkuaz+oq</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Turkuaz+kulrang</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Moviy</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Sariq</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Sariq+binafsha</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Yashilmarjon</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Marjon+oq</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>jigarrang</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Qizil</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Multfilmlar</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Pushti</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Kulrang</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Kulrang+turkuaz</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Kulrang+ko‘k</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Moviy</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Moviy+kulrang</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>binafsha</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Binafsha+turkuaz</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Binafsha+sariq</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Binafsha+kulrang</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Qora</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Bordo</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Zumrad</p>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pt-5">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseFive">
                            Astar Materiali
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <form>
                                <span><input type="checkbox">
                                    <p>Vorsyn (demi-mavsum)</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Tabiiy mo'yna</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Tabiiy jun mo'yna</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Junli</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>qo'llab-quvvatlamasdan</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>villi</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Sof teridan</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>tabiiy mo'yna</p>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pt-5">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSex" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseSex">
                            Yuqori Material
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSex" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <form>
                                <span><input type="checkbox">
                                    <p>his qildi</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Kigiz+ Nat. teri</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>his+nat. velorlar</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Teri</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Nat. velorlar</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>Sof teridan</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>EVA</p>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pt-5">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseSeven">
                            Tashqi Taglik Materiali
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <form>
                                <span><input type="checkbox">
                                    <p>TEZ</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>EVA</p>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="accordion-item pt-5">
                    <h2 class="accordion-header">
                        <button class="accordion-button accordion-buttons border border-0" type="button"
                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseEight">
                            O'lchamlari
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse show">
                        <div class="accordion-body pt-2">
                            <form>
                                <span><input type="checkbox">
                                    <p>35</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>36</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>37</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>38</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>39</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>40</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>41</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>42</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>43</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>44</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>45</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>46</p>
                                </span>
                                <span><input type="checkbox">
                                    <p>47</p>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            filter: 'all'
        }
    },
    props: {
        updateFilterHandler: {
            type: Function,
            required: true
        }
    },
    methods: {
        filterHandler(filter) {
            this.filter = filter
            this.updateFilterHandler(this.filter)
        }
    }
}
</script>
<style scoped>
.main-sidebar-right {
    max-width: 347px;
    width: 100%;
    padding: 0 15px 0 30px;
    transform: translateX(0px);
    transition: all 3s;
}



.accordion {
    border-bottom: 1px solid #b5b4b4;
    padding: 0 0 20px 0;
}

.main-sidebar-right .accordion-buttons {
    border: none !important;
    font-size: 25px;
    padding: 0;
    margin: 0 !important;
    width: 100%;
}

.main-sidebar-right .accordion-button {
    padding: 0;
}

.accordion-button:not(.collapsed) {
    background: none;
    box-shadow: 0 0px 0px white !important;
    color: black;
}

.accordion-item {
    border: none;
}

.accordion-body {
    padding: 0;
}

.accordion-body form {
    display: flex;
    flex-wrap: wrap;
}

.accordion-body form span {
    display: flex;
    align-items: center;
    line-height: 35px;
    margin: 0 10px 0 0;
}

.accordion-body form span input {
    width: 20px !important;
    height: 20px;
    margin: 0 2px 0 0;
    background-color: red !important;
}

.accordion-body form span p {
    margin: 0;
    color: #868585;
    padding: 3px 5px;
}

.accordion-body a {
    margin: 7px 0 !important;
    display: block;
}


@media (max-width: 1225px) {
    .main-sidebar-right {
        display: none;
    }
}
</style>