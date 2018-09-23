<template>
  <component v-bind:is="currentComponent" :parameter="parameter"/>
</template>

<script>
  import ShowAll from './ShowAll'
  import Add from './Add'
  import Modify from './Modify'
  export default {
    name: "Studio",
    data(){
      return{
        components : {
          ShowAll : ShowAll,
          Add : Add,
          Modify : Modify
        },
        currentComponent : ShowAll,
        parameter : null
      }
    },
    methods : {
      showComponent(component) {
        this.currentComponent = component;
      }
    }
  }
</script>

<style scoped>

</style>
