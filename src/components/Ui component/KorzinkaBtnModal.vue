<template>
    <div>
        <button type="button" style="border: none; background: red; padding: 0;" data-bs-toggle="offcanvasw"
            data-bs-target="#offcanvaswRight" aria-controls="offcanvaswRight"><i class='bx bx-basket'><span>{{ counter
                    }}</span></i></button>
        <div class="offcanvasw offcanvasw-end" tabindex="-1" id="offcanvaswRight" aria-labelledby="offcanvaswRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvasw-title" id="offcanvaswRightLabel">Savatcha ({{ counter }})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvasw" aria-label="Close"></button>
            </div>
            <div class="offcanvasw-body">
                <button v-on:click="min">-</button>
                <button v-on:click="ondec">+</button>
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
        ondec() {
            if (this.counter < 10) {
                this.counter += 1
            } else {
                alert('error')
            }
        },
        min() {
            if (this.counter > 0) {
                this.counter -= 1
            } else {
                this.counter = 0
            }
        }
    }
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