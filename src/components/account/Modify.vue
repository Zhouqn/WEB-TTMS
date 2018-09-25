<template>
  <div id="modify">
    <form class="modify-form">
      <div class="form-group">
        <label for="account-id">用户编号</label>
        <input type="text" class="form-control" id="account-id" readonly v-model="parameter.id">
      </div>
      <div class="form-group">
        <label for="account-name">名字</label>
        <input type="text" class="form-control" id="account-name" placeholder="名字" v-model="parameter.name">
      </div>
      <div class="">
        <button type="submit" class="btn btn-warning ">取 消</button>
        <button type="submit" class="btn btn-primary ">下一步</button>
      </div>
    </form>

  </div>

</template>

<script>
  export default {
    name: "Modify",
    props : ['parameter'],
    data(){
      return{
        account : null,
      }
    }
  }
</script>

<style scoped>
  #modify{
    margin-left: 5%;
    margin-right: 5%;
  }
  .modify-form {
    margin-left: 15%;
    margin-right: 15%;
    text-align: left;
  }
</style>
