import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username:null,
    page:null,
    projects:[
      {
        project_id:1,
        project_uri:"vue-project",
        title:"Vue Project",
        description:"A Simple Vue Project",
        file:
          {
            readme: "<h1>README</h1><h2>What is inside this Vue Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"
          },
        
      },
      {
        project_id:2,
        title:"React Project",
        project_uri:"react-project",
        description:"A Simple React Project",
        file:
          {
            readme: "<h1>README</h1><h2>What is inside this React Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"
          },
        
      },
      {
        project_id:3,
        project_uri:"angular-project",
        title:"Angular Project",
        description:"A Simple Angular Project",
        file:
          {
            readme: "<h1>README</h1><h2>What is inside this Angular Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"
          },
        
      },
      {
        project_id:4,
        project_uri:"react-native-project",
        title:"React Native Project",
        description:"A Simple React Native Project",
        file:
          {
            readme: "<h1>README</h1><h2>What is inside this React native Project</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><h2>Build</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, numquam!</p><span>You can edit task title, add / edit description to the task.</span>"
          },
      }
    ],
    project_detail:null
  },
  mutations: {},
  actions: {},
  modules: {}
});
