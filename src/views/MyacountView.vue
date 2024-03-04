<template>
    <div class="containers">
        <h1 class="text-center">Mening hisobim</h1>
        <div class="containers-blok">
            <h2 class="text-center">Login </h2>
            <form>
                <label for="email">Email *</label>
                <input type="email" id="email">
                <label for="password">Password *</label>
                <input type="password" id="password">
                <div class="checkend">
                    <p><input type="checkbox">Remember me</p>
                    <p>Lost your password?</p>
                </div>
                <button type="submit" class="p-3 bg-dark text-white mt-2">Log in</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
form{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 50%;
}
label{
    margin: 0;
    color: #707070;
    font-size: 18px;
}
input{
    border: 1px solid #ebeeee;
    outline: none;
    padding: 10px 20px;
    margin: 0 0 19px 0;
    font-size: 17px;
    color: #707070;
    background: #7089db22;
}
.checkend{
    display: flex;
    justify-content: space-between !important;    
    width: 100%;
    padding: 10px 15px 10px 0;
}
.checkend p{
    margin: 0;
    color: #707070;
    font-size: 16px;
}
.checkend p input{
    margin-right: 15px;
}
.containers-blok h2{
    position: relative;
    width: 110px;
}
.containers-blok h2:after{
    content: '';
    height: 6px;
    width: 6px;
    display: block;
    background: #2c2c2c;
    position: absolute;
    right: 3px;
    top: 50%;
}

@media (max-width: 765px){
    form{
        width: 95%;
    }
}
</style>