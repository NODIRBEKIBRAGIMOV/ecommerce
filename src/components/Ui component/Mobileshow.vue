<template>
    <div class="mobile-show">
        <RouterLink to="/"><span><i class='bx bx-home'></i></span></RouterLink>
        <span><i class='bx bx-user'></i>
            <!-- <button type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class='bx bx-user'></i></button>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="1"
                id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div> -->
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
button{
    border: none;
    background: none;
}
@media (max-width: 1025px) {
    .mobile-show {
        display: grid;
    }
}
</style>