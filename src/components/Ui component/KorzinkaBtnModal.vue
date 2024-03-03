<template>
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"><i class='bx bx-basket'></i></button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
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