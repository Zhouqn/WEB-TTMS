<template>
  <div id="modify">
    <form class="modify-form">
      <div class="form-group">
        <label for="account-id">用户编号</label>
        <input type="text" class="form-control" id="account-id" readonly v-model="parameter.uid">
      </div>
      <div class="form-group">
        <label for="account-name">名字</label>
        <input type="text" class="form-control" id="account-name" placeholder="名字" v-model="parameter.username">
      </div>
      <label for="account-name">身份类别</label>
      <div class="input-group mb-3">
        <select class="custom-select" id="inputGroupSelect02">
          <option v-model="parameter.type" selected=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{parameter.type}}</font></font></option>
          <option value="1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管理员</font></font></option>
          <option value="2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经理</font></font></option>
          <option value="3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">售票员</font></font></option>
        </select>
        <div class="input-group-append">
          <label class="input-group-text" for="inputGroupSelect02"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></label>
        </div>
      </div>
      <div class="">
        <button type="submit" class="btn btn-warning ">取 消</button>
        <button type="submit" class="btn btn-primary ">确 定</button>
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
