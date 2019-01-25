<template>
  <component v-bind:is="currentComponent" :parameter="parameter" />
</template>

<script>
  import ShowPlays from './ShowPlays'
  import ShowScheduleByPlay from './ShowScheduleByPlay'
  export default {
    name: "Sale",
    data() {
      return {
        components: {
          ShowPlays: ShowPlays,
          ShowScheduleByPlay : ShowScheduleByPlay
        },
        currentComponent: ShowPlays,
        parameter: null
      }
    },
    methods: {
      showComponent(component) {
        this.currentComponent = component;
      }
    },
    mounted() {

      //在组件挂载完成后向父组件发送title事件,使得父组件修改标题
      this.$emit('title', '售票');
    }

  }
</script>

<style scoped>

</style>
