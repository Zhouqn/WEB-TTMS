<template>
  <component v-bind:is="currentComponent" :parameter="parameter" />
</template>
<script>
  import ShowAll from './ShowAll'
  import Modify from './Modify'
  import Add from './add'
  export default {
    name: "Play",
    data(){
      return{
        components : {
          ShowAll : ShowAll,
          Modify : Modify,
          Add : Add

        },
        currentComponent : ShowAll,
        parameter : null
      }
    },
    methods : {
      showComponent(component) {
        this.currentComponent = component;
      }
    },
    mounted(){

      //在组件挂载完成后向父组件发送title事件,使得父组件修改标题
      this.$emit('title','剧目管理');
    }
  }


</script>

<style scoped>

</style>

