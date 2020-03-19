<template>
  <div class="project-component" @click="details()">
    <div class="project-container">
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "Project",
  props: {
    title:null,
    description:null
  },
  data: function () {
    return {
      user:"Danu",
    }
  },
  methods: {
    details: function () {
        this.$emit('details', this.user)
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/__variables.scss';
.project-component {
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    padding: 16px;
    margin: 12px;
    -webkit-box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.11);
    -moz-box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.11);
    box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.11);
    .title {
      font-size: 16pt;
      color: $text-color;
      margin-bottom: 16px;
    }
    .description {
      font-size: 10pt;
      color: #707070;
    }
    &:hover {
      transition: .2s ease-in-out;
      -webkit-box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.5);
      -moz-box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.5);
      box-shadow: 5px 6px 6px 0px rgba(38,127,216,0.5);
    }
}
</style>
