<template>
  <div class="home">
    <Headerhome />
    <ElementorSection />
    <ElementorSectiontwo />
    <ElementorSectionthree />
    <Yangiliklar />
    <Comentariya />
  </div>
</template>
<script>
import ElementorSection from '@/components/Home/ElementorSection.vue';
import Headerhome from '../components/Home/Headerhome.vue'
import ElementorSectiontwo from '@/components/Home/ElementorSectiontwo.vue';
import ElementorSectionthree from '@/components/Home/ElementorSectionthree.vue';
import Yangiliklar from '@/components/Home/Yangiliklar.vue';
import Comentariya from '@/components/Home/Comentariya.vue';
export default {
    components: { Headerhome, ElementorSection, ElementorSectiontwo, ElementorSectionthree, Yangiliklar, Comentariya }
}
</script>
<style scoped>
.home {
  height: 100%;
  width: 100%;
}


@media (max-width: 1520px) {
  .containerr {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
  }
}

@media (max-width: 1025px) {
  .containerr {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }
}

@media (max-width: 576px) {
  .containerr {
    grid-template-columns: auto;
  }
}</style>