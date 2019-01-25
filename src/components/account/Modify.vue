<template>
  <div id="modify">
    <div class="modify-form">
      <div class="form-group">
        <label for="account-id">用户编号</label>
        <input type="text" class="form-control" id="account-id" readonly v-model="account.uid">
      </div>
      <div class="form-group">
        <label for="account-name">用户名&nbsp;<span style="color: red" id="usernameError"></span></label>
        <input type="text" class="form-control" id="account-name" placeholder="用户名" v-model="account.username">
      </div>
      <label for="account-name">身份类别</label>
      <div class="input-group mb-3">
        <select class="custom-select" id="inputGroupSelect02" v-model="account.type">
          <option value="ADMIN"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管理员</font></font></option>
          <option value="MANG"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经理</font></font></option>
          <option value="CLERK"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">售票员</font></font></option>
        </select>
      </div>
      <div class="form-group">
        <label for="account-name">密码&nbsp;<span style="color: red" id="passwordError"></span></label>
        <input type="password" class="form-control" id="account-password" placeholder="留空表示不修改" v-model="account.password">
      </div>
      <div class="" style="text-align: right">
        <button type="submit" class="btn btn-warning " @click="cancel" >取 消</button>
        &nbsp;&nbsp;
        <button type="submit" class="btn btn-primary " @click="submit(account)" >确 定</button>
      </div>
    </div>

  </div>

</template>

<script>
  import {chComponent} from '../../units/tools'
  import {post} from '../../units/myHttp'
  export default {
    name: "Modify",
    props : ['parameter'],
    data(){
      return{
        account : Object.assign({},this.parameter),

        ACCOUNT_TYPE :{
          ADMIN : '管理员',
          MANG : '经理',
          CLERK : '售票员'
        }
      }
    },
    methods :{
      checkInput(username,password){

        let flag = true;
        let checkUsername = /^.{2,10}$/;
        let usernameError = document.getElementById("usernameError");
        if(!checkUsername.test(username)){
          usernameError.innerHTML = '用户名必须为2-10位';
          flag = false;
        }else {
          usernameError.innerHTML = ''
        }
        let passwordError = document.getElementById("passwordError");
        let checkPass = /^.{2,20}$/;
        if(password !== '' && !checkPass.test(password)){
          passwordError.innerHTML = '密码必须为2-20位';
          flag = false;
        }else {
          passwordError.innerHTML = '';
        }
        return flag;
      },
      submit(account){
        if(!this.checkInput(account.username,account.password)) return;
        let accountCopy = Object.assign({},account);
        let MD5 = require("md5.js");
        if(accountCopy.password !== '') {
          accountCopy.password = new MD5().update(accountCopy.password).digest("hex");
        }else {
          accountCopy.password = this.parameter.password;
        }
        post('account/modify',accountCopy)
          .then((response) => {
            if(response.status){
              toastr.success("用户信息修改成功！");
              chComponent(this,'ShowAll',null)
            }else {
              console.log(response);
              toastr.error("修改失败！请重试")
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
      cancel(){
        chComponent(this,'ShowAll',null)
      }


    },
    mounted(){
      // this.account = Object.assign({},this.parameter);
      this.account.password = '';
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
