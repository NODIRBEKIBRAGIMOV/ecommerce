<template>
  <Header />
  <RouterView class="routers"/>
  <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
  <Footer />
</template>
<script>
import { RouterView } from 'vue-router';
import { Header } from './components/component';
import Footer from './components/Footer.vue';

export default {
  components: { RouterView, Header,Footer },
  // data() {
  //   return {
  //     log(){
  //       alert("!!! Error !!!")
  //     }
  //   }
  // },
  // mounted(){
  //   this.log()
  // }
}
</script>
<style scoped>
.routers{
  margin-top: 146px;
}
a{
  width: 45px;
  height: 45px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-color: #5c9ab9;
  color: white;
  font-size: 40px;
}
@media (max-width: 1025px){
  a{
    width: 40px;
    height: 40px;
    font-size: 30px;
    bottom: 55px;
    right: 5px;
    z-index: 9;
  }
}
</style>