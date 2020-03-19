<template>
  <div class="Notfound" >
    <div class="container" style="text-align:center;">
        <h1>404</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "Notfound",
  components: {
  },
  mounted: function () {
    this.$store.state.page = 'notfound'
  },
};
</script>
<style scoped lang="scss">

</style>
