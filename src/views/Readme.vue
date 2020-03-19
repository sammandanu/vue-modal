<template>
  <div class="readme" >
    <div class="container" v-if="data">
        <div class="content" v-html="data"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Readme",
  components: {
  },
  data: function () {
    return {
      id:null,
      data:null
    }
  },
  mounted: function () {
    if (!this.$store.state.username) {
    this.$router.push('/login')
    }
    this.uri = this.$route.params.uri
    this.$store.state.page = 'readme'
    this.getProjectReadme()
  },
  methods: {
    getProjectReadme: function () {
        this.$store.state.projects.forEach(function (project) {
            if(project.project_uri == this.uri) {
                this.data = project.file.readme
                this.$store.state.project_detail = project.title
            }
        }.bind(this));
    }
  },
  computed: {
    
  },
  beforeDestroy: function() {
      this.$store.state.project_detail = null
  }
};
</script>
<style scoped lang="scss">
@import '@/assets/__variables.scss';
.content {
    padding: 16px 24px;
}
</style>
