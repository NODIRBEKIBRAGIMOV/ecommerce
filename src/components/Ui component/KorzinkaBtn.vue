<template>
    <div class="korbtn">
        <button type="button" style="border: none; background: none; padding: 0;" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class='bx bx-basket'><span>{{ counter
            }}</span></i></button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Savatcha ({{ counter }})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1>Savatcha bo'sh</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.korbtn{
    z-index: 100;
}
.offcanvas{
    border: 1px solid red !important;
}
.offcanvas-header {
    display: flex;
    height: 75px;
    justify-content: space-between;
    background-color: #96969626;
    width: 100%;
    padding-right: 45px;
}

.offcanvas-title {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    color: #111;
}

button i {
    color: #7777779c;
    font-size: 22px;
    margin: 0 5px;
    cursor: pointer;
    position: relative;
}

button i:hover {
    color: #777;
}

button i span {
    background: black;
    position: absolute;
    top: -6px;
    right: -6px;
    font-size: 16px;
    padding: 2px 5px 2px 5px;
    color: white;
    border-radius: 50%;
}

@media (max-width: 576px) {
    .offcanvas{
        display: block;
    }
}
</style>