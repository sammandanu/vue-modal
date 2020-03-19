<template>
  <div class="modal-component">
      <div class="modal-container">
        <div class="modal-title" v-if="!title">Loading</div>
        <div class="modal-title" v-else>{{title}}</div>
        <div class="description" v-if="!description">Loading..</div>
        <div class="description" v-else>{{description}}</div>
        <div class="files-container">
            <div class="file-header">File</div>
            <div class="file-item-container" v-for="file in files" :key="file">
                <div class="item">{{ file }}</div>
                <div class="action" @click="toReadme(uri)">View</div>
            </div>
        </div>
        <div class="modal-close" @click="dismiss()">
            Close
        </div>
      </div>

      
  </div>
    
</template>

<script>
export default {
  name: "Modal",
  props: {
    uri:null,
    title:null,
    description:null,
    data:null
  },
  data: function(){
      return {
          files:null
      }
  },
  mounted: function() {
      this.files = Object.keys( this.data );
  },
  methods: {
      dismiss: function () {
          this.$emit('dismiss')
      },
      toReadme:function (data) {
          this.$router.push('/project/' + data )
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/__variables.scss';
.modal-component {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 17, 17, 0.5);
    animation: modalFadeIn .2s linear;
    .modal-container {
        background: white;
        margin: auto;
        max-width: 500px;
        widows: 90%;
        float: none;
        margin-top: 200px;
        padding: 32px 24px;
        border-radius: 4px;
        .modal-title {
            font-size: 20pt;
            font-weight: bold;
            padding-bottom: 8px;
            border-bottom: 1px solid #eaeaea;
            margin-bottom: 8px;
            
        }
        .description {
            color: #707070;
            margin-bottom: 8px;
        }
        .files-container {
            .file-header {
                padding-bottom: 8px;
                border-bottom: 1px solid #eaeaea;
                margin-bottom: 8px;
            }
            .file-item-container {
                display: flex;
                font-size: 10pt;
                .item {
                    flex: 1;
                }
                .action {
                    color: $text-color;
                    cursor: pointer;
                }
            }
        }
        .modal-close {
            margin-top: 32px;
            text-align: center;
            color: $text-color;
            cursor: pointer;
        }
    }
}

@keyframes modalFadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1
    }
}
</style>
