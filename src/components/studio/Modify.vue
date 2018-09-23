<template>
  <div>
    <h1>Modify</h1>
    <h5>{{parameter}}</h5>
  </div>

</template>

<script>
  export default {
    name: "Modify",
    props : ['parameter'],
    data(){
      return{
        studio : null,
      }
    }
  }
</script>

<style scoped>

</style>
