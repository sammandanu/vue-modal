<template>
  <div class="login" >
    <div class="container">
        <div class="text">GitHub Username</div>
        <input maxlength="25" type="text" v-model="$store.state.username" v-on:keyup.enter="submit()">
        <br>
        <button @click="submit()">Login</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  components: {
  },
  data: function () {
    return {
      
    }
  },
  mounted: function () {
    this.$store.state.page = 'login'
  },
  methods: {
    submit: function () {
      if(!this.$store.state.username) {
        alert("Please Fill Your Username")
        return
      }
      this.$router.push('/')
    }
  },
  computed: {
    
  }
};
</script>
<style scoped lang="scss">
@import '@/assets/__variables.scss';
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
}
.container {
  // padding: 0 8px;
  // margin-top: 100px;
  .text {
    font-size: 24pt;
    color:$text-color;
    font-weight: bold;
  }
  input {
    padding: 8px 16px;
    border-radius: 4px;
    outline-color: $text-color;
    border: 1px solid #eaeaea;
    margin-top: 16px;
  }
  button {
    margin-top: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid $text-color;
    color: $text-color;
    background-color: #fff;
    &:hover {
      background-color: $text-color;
      color: #fff;
      transition: .3s all;
    }
  }
}
</style>
