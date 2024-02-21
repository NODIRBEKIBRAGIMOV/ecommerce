<template>
    <div class="child">
        <div class="child-search">
            <button><i class='bx bx-zoom-in'></i></button>
        </div>
        <div class="child-img">
            <!-- <img :src="childw.img" :title="childw.title"> -->
            <img src="https://marevo.style/wp-content/uploads/2023/12/DSCF4190-750x750.jpg" alt="">
        </div>
        <div class="child-img2">
            <!-- <img :src="childw.image" :title="childw.title"> -->
            <img src="https://marevo.style/wp-content/uploads/2023/12/DSCF4190-750x750.jpg" alt="">
        </div>

        <div class="child-title">
            <h5>{{ childw.title }}</h5>
        </div>
        <div class="like-btn">
            <button type="button" @click="onlike" class="btn" :class="{ like: childw.like }"><i
                    class='bx bxs-heart'></i></button>
        </div>
        <div class=" child-price">
            <h4><s>{{ childw.price2 }}</s> {{ childw.price }} $</h4>
            <p>Hajmi</p>
        </div>
        <div class="shoe-size">
            <select name="size" id="child-size">
                <option value="s">36</option>
                <option value="s">37</option>
                <option value="s">38</option>
                <option value="s">39</option>
                <option value="s">40</option>
                <option value="s">41</option>
                <option value="s">42</option>
                <option value="s">43</option>
                <option value="s">44</option>
                <option value="s">45</option>
                <option value="s">45</option>
            </select>
        </div>
        <div class="child-btn">
            <button>Savatchaga qo'shish</button>
        </div>
    </div>
</template>
<script>
import Loader from '../Ui component/Loader.vue';

export default {
    props: {
        childw: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        onlike() {
            this.$emit('onlike', this.childw.id);
        },

    },
    components: { Loader }
}
</script>
<style scoped>
.btn.like i {
    color: red !important;
}

.child {
    overflow: hidden !important;
    width: 100% !important;
    position: relative;
}

.child-search {
    position: absolute;
    top: 8px;
    right: 8px;
    transform: translateY(-55px);
    transition: all ease-in-out 0.4s;
}

.child:hover .child-search {
    transform: translateY(0px) !important;
}

.child-search button {
    border: none;
    font-size: 20px;
    padding: 5px 10px 2px 10px;
    background: #000;
    color: white;
}

.child img {
    width: 100%;
    cursor: pointer;
}

.child:hover .child-img {
    display: none !important;
    transition: all 1s ease-in !important;
}

.child:hover .child-img2 {
    display: block !important;
    transition: all 1s ease-in;
}

.child-img2 {
    display: none;
}

.child-title {
    height: 30px;
    margin-top: 23px;
    text-align: left;
}

.child-title h5 {
    font-size: 16px;
    color: #707070;
    letter-spacing: 0.01em;
}

.like-btn {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.like-btn button {
    border: 1px solid #e3e1e1;
    padding: 10px 10px 5px 10px;
}

.like-btn button i {
    font-size: 20px;
    color: #c1bbbb;
}

.child-price h4 {
    font-size: 18px;
    margin: 0 !important;
}

.child-price p {
    margin: 0;
}

.child-price h4 s {
    color: #707070;
    font-size: 16px;
}

.shoe-size {
    padding: 0 20px 0 0;
    border: 2px solid #7da2b4;
}

#child-size {
    width: 100%;
    padding: 10px 20px !important;
    border: none;
}

.child-btn button {
    width: 100%;
    padding: 14px 40px;
    border: none;
    position: relative;
    z-index: 0;
    background: #7da2b4;
    color: white;
    margin-top: 15px;
}

.child-btn button::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background-color: #2c2c2c;
    width: 0;
    transform-origin: 0 50%;
    transition: all ease .4s;
}

.child-btn button:hover::before {
    width: 100%;
}

@media (max-width: 576px) {
    .like-btn {
        display: none;
    }

    .child-title {
        height: 50px;
    }

    .child-title {
        height: 45px;
    }

    .child-title h5 {
        font-size: 12px;
    }

    .shoe-size {
        padding: 0 2px 0 0;
    }

    #child-size {
        padding: 5px 5px !important;
    }

    .child-price h4 {
        font-size: 14px;
    }

    .child-btn button {
        padding: 5px 10px !important;
        font-size: 12px !important;
        margin-top: 5px;
    }
}
</style>