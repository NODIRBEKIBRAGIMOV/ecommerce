<template>
    <div class="mobile-show">
        <RouterLink to="/"><span><i class='bx bx-home'></i></span></RouterLink>
        <span><i class='bx bx-user'></i>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Send message</button>
                        </div>
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