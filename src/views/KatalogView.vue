<template>
    <div class="container-katalog">
        <div class="containers-title">
            <h1>Katalog</h1>
            <p><a href="#" class="router-a">
                    <RouterLink to="/">Uy</RouterLink>
                </a> / Katalog</p>
        </div>
        <div class="d-flex w-100">
            <div class="w-75 set">
                <Title />
                <Loader v-if="!child.length && !isLoading"></Loader>
                <ContentFather v-else :child="onFilterHandler(child, filter)" @onlike="onlikeHandler" />
                <nav aria-label="pagination" :class="[filter == 'popular' && 'none']" class="my-5 w-50 paginations">
                    <ul class="pagination">
                        <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === page }"
                            @click="changPageHandler(pageNumber)">
                            <span class="page-link">{{ pageNumber }}</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <Filter class="w-25" :updateFilterHandler='updateFilterHandler' />
        </div>

    </div>
</template>
<script>
import ContentFather from '@/components/Katalog/ContentFather.vue';
import { Title, Filter, Loader } from '../components/component'
import axios from "axios"
export default {
    components: {
        Title,
        Filter,
        ContentFather,
        Loader
    },
    data() {
        return {
            child: [
                // { id: 1, img: 'https://marevo.style/wp-content/uploads/2024/01/5-1-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2024/01/5-1-750x750.jpg', title: 'Botinkalar 83-091-04 Bej Kigiz', price: '6 990 ₽', },
                // { id: 2, img: 'https://marevo.style/wp-content/uploads/2023/12/DSCF4190-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/12/DSCF4191-750x750.jpg', title: 'Botinkalar 93-047-01 Qora Kigiz', price: '6 900 ₽', },
                // { id: 3, img: 'https://marevo.style/wp-content/uploads/2023/02/DSC00106-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/02/DSC00106-750x750.jpg', title: 'Botinkalar 83-087-01B Black Nat. Teri Villi', price: '7 490 ₽', },
                // { id: 4, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF4602-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF2871-750x750.jpg', title: "Botinkalar 83-100-04N Bej Tabiiy Velor Tabiiy Mo'yna", price: '7 790 ₽', ayollar: false },
                // { id: 5, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3284-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3284-750x750.jpg', title: 'Abarkasy 85-013-43 Limon Haqiqiy Teri', price: '2 490 ₽', price2: '3 990 ₽', },
                // { id: 6, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3207-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3174-750x750.jpg', title: 'Abarkasy 85-013-45 Mint Nat. Teri', price: '2 490 ₽', price2: '3 990 ₽', },
                // { id: 7, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3249-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3249-750x750.jpg', title: 'Abarkasy 85-013-44 Oq/Oltin Nat. Teri', price: '2 490 ₽', price2: '3 990 ₽', },
                // { id: 8, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3213-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3218-750x750.jpg', title: 'Abarka 85-013-38 Bronza Nat. Teri', price: '2 490 ₽', price2: '3 990 ₽', erkaklar: false },
                // { id: 9, img: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3363-750x750.jpg', image: 'https://marevo.style/wp-content/uploads/2023/11/DSCF3363-750x750.jpg', title: 'Abarkasy 85-013-40 Blue Nat. Teri', price: '2 490 ₽', price2: '3 990 ₽', },
            ],
            filter: 'all',
            isLoading: false,
            limit: 9,
            page: 1,
            totalPages: 0,
        }
    },
    methods: {
        onlikeHandler(id) {
            setTimeout(async () => {
                this.child.map(item => {
                    if (item.id == id) {
                        item.like = !item.like
                    }
                    return item
                })
            }, 500)
        },
        onFilterHandler(arr, filter) {
            switch (filter) {
                case 'popular':
                    return arr.filter(c => c.like)
                case 'erkaklar':
                    return arr.filter(c => c.erkaklar)
                case 'items':
                    return arr.filter(c => c.ayollar)
                default:
                    return arr
            }
        },
        updateFilterHandler(filter) {
            this.filter = filter
        },
        update() {
            alert('salom error')
        },
        async fetchChild() {
            try {
                this.isLoading = true
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _limit: this.limit,
                            _page: this.page,
                        },
                    })
                    const newArr = response.data.map(item => ({
                        id: item.id,
                        title: item.title,
                        price: item.id
                    }))
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.child = newArr
                }, 1000)
            } catch (error) {
                alert(error.message);
            } finally {
                this.isLoading = false
            }
        },
        changPageHandler(page) {
            this.page = page
        },
    },
    mounted() {
        this.fetchChild()
    },
    watch: {
        page() {
            this.fetchChild()
        }
    }
}
</script>
<style scoped>
* {
    margin: 0 auto;
    text-decoration: none;
}

.active>.page-link,
.page-link.active {
    z-index: 3;
    color: white;
    background-color: black;
    border-color: white;
}

.page-link {
    color: black;
}

.page-link:hover {
    background: #000;
    color: white;
    cursor: pointer;
}

.none {
    display: none;
}

.container-katalog {
    width: 1360px;

}

.containers-title {
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 10px !important;
}


@media (max-width: 1360px) {
    .container-katalog {
        width: 100%;
        padding: 0 85px;
    }
}

@media (max-width: 1225px) {
    .set {
        width: 100% !important;
    }
}

@media (max-width: 965px) {
    .container-katalog {
        padding: 0 15px;
    }

    .paginations {
        width: 90% !important;
    }
}

@media (max-width: 576px) {
    .paginations {
        width: 100% !important;
    }

    .pagination {
        flex-wrap: wrap;
        justify-content: center !important;
        display: flex !important;
    }

    .pagination li {
        margin: 0 2px;
    }

    .page-link {
        padding: 5px 10px;
        margin: 0;
    }
}
</style>