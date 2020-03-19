<template>
  <div class="home" >
    <div class="container">
      <div class="project-container" v-if="$store.state.projects" >
        <Project v-for="project in $store.state.projects" :key="project.project_id" :title="project.title" :description="project.description" @details="openModal(project.title, project.description, project.file, project.project_uri)" />
      </div>
    </div>
    
    <Modal  v-if="projectModal" :uri="projectUri" :title="projectTitle" :description="projectDescription" :data="projectFile" @dismiss="projectModal = false"/>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: "Home",
  components: {
    Project,
    Modal

  },
  data: function () {
    return {
      projectModal: false,
      projectTitle:null,
      projectDescription:null,
      projectFile:null,
      projectUri:null
    }
  },
  mounted: function () {
    if (!this.$store.state.username) {
      this.$router.push('/login')
    }
    this.$store.state.page = 'home'
  },
  methods: {
    openModal: function (title, description, file, uri) {
      this.projectModal = true
      this.projectTitle = title
      this.projectDescription = description
      this.projectFile = file
      this.projectUri = uri
    }
  },
  computed: {
    
  }
};
</script>
<style scoped lang="scss">
.container {
  padding: 0 8px;
}
  .project-container  {
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
