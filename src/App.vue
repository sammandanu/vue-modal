<template>
  <div id="app">
    <Header v-if="$store.state.page != 'login' && $store.state.page != 'notfound'"></Header>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
}
div {
  box-sizing: border-box;
}
.container {
    width: 100%;
    max-width: 1200px;
    float: none;
    margin: auto;
}
</style>
