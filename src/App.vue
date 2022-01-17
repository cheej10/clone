<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import url('./assets/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

#app {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
