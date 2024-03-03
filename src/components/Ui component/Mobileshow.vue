<template>
    <div class="mobile-show">
        <RouterLink to="/"><span><i class='bx bx-home'></i></span></RouterLink>
        <span><i class='bx bx-user'></i>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExamples">
                Button with data-bs-target
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExamples"
                aria-labelledby="offcanvasExamplesLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExamplesLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </span>
        <span>
            <KorzinkaBtnModal />
        </span>
        <span>
            <RouterLink to="/Sevimlilar"><i class='bx bx-heart'></i></RouterLink>
        </span>
    </div>
</template>

<script>
import KorzinkaBtnModal from './KorzinkaBtnModal.vue'
export default {
    components: { KorzinkaBtnModal }
}
</script>

<style scoped>
.mobile-show {
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: none;
    grid-template-columns: 25% 25% 25% 25%;
    margin-top: 200px;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 10;
}

span i {
    font-size: 22px;
    color: #7777779c;
    font-size: 22px;
    margin: 0 5px;
    cursor: pointer;
}

span i:hover {
    color: #777;
}

@media (max-width: 1025px) {
    .mobile-show {
        display: grid;
    }
}
</style>