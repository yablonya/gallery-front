<script>
import {defineComponent} from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {Header}
})
</script>

<template>
  <Header/>
  <router-view></router-view>
  футер
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&family=Mulish:wght@200;300;400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Mulish', sans-serif;
  box-sizing: border-box;
}

/deep/ a {
  text-decoration: none;
  color: inherit;
}
</style>
