<template>
  <div class="header-component">
    <div class="main-nav">
        <div class="container">
            <div class="username" v-if="$store.state.username">Hi {{$store.state.username}}</div>
            <div class="username" v-else >Hi Lorem</div>
            <div class="nav-item-container">
                <div class="nav-item" @click="toPage('/')">Project</div>
                <div class="nav-item" @click="toPage('/login')">Logout</div>
            </div>
        </div>
    </div>
    <div class="bottom-nav" v-if="$store.state.project_detail">
        <div class="container">
            <div class="project-name" >Project / {{ $store.state.project_detail }}</div>
        </div>
    </div>
  </div>
    
</template>

<script>
export default {
  name: "Header",
  props: {
  },
  methods: {
      toPage: function (link) {
          if (link == '/' && link != this.$store.state.page ) {
              this.$router.push('/')
          }
          else {
              if (confirm("Apakah Anda Yakin?")) {
                  this.$store.state.username = null
                    this.$router.push('/login')
              }
              
          }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/__variables.scss';
.header-component {
    .main-nav {
        border-bottom: 1px solid #eaeaea;
        .nav-item-container {
            display: flex;
            .nav-item {
                a {
                    text-decoration: none;
                    font-size: 11pt;
                    color: #333;
                    &:hover {
                    color: $text-color;
                }
                }
                margin: 0 16px;
                
                cursor: pointer;
                &:last-child {
                    margin-right: 0;
                }
                
            }
        }
        .container {
            padding: 16px 24px;
            display: flex;
            justify-content: center;
        }
        .username {
            flex: 1;
            font-size: 16pt;
            font-weight: bold;
            color: $text-color;
        }
    }
    .bottom-nav {
        font-size: 11pt;
        color: #707070;
        .container {
            padding: 8px 24px;
        }
        border-bottom: 1px solid #eaeaea;
    }

}
</style>
