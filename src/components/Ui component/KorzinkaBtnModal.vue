<template>
    <div>
        <button type="button" style="border: none; background: none; padding: 0;" data-bs-toggle="offcanvasw"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class='bx bx-basket'><span>{{ counter
            }}</span></i></button>
        <div class="offcanvasw offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Savatcha ({{ counter }})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvasw" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <button v-on:click="min">-</button>
                <button v-on:click="ondec">+</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
</style>