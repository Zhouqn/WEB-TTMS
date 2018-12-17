<template>
  <div id="modify">
    <form class="modify-form">

      <div class="form-group">
        <label for="account-name">用户名&nbsp;<span style="color: red" id="usernameError"></span></label>
        <input type="text" class="form-control" id="account-name" placeholder="请输入用户名" v-model="account.username">
      </div>
      <label for="account-name">身份类别</label>
      <div class="input-group mb-3">
        <select class="custom-select" id="inputGroupSelect02" v-model="account.type">
          <option value="ADMIN"><font style="vertical-align: inherit;"><font
            style="vertical-align: inherit;">管理员</font></font></option>
          <option value="MANG"><font style="vertical-align: inherit;"><font
            style="vertical-align: inherit;">经理</font></font></option>
          <option value="CLERK"><font style="vertical-align: inherit;"><font
            style="vertical-align: inherit;">售票员</font></font></option>
        </select>
      </div>
      <div class="form-group">
        <label for="account-name">密码&nbsp;<span style="color: red" id="passwordError"></span></label>
        <input type="password" class="form-control" id="account-password" placeholder="请输入密码" v-model="account.password">
      </div>
      <div class="" style="text-align: right">
        <button type="submit" class="btn btn-warning " @click="cancel">取 消</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit" class="btn btn-primary " @click="add">确 定</button>
      </div>
    </form>

  </div>

</template>


<script>
  import {chComponent} from '../../units/tools'
  import {post} from '../../units/myHttp'

  export default {
    name: "Add",
    data() {
      return {
        account: {
          type: 'CLERK',
          username: '',
          password: ''
        },

        ACCOUNT_TYPE: {
          ADMIN: '管理员',
          MANG: '经理',
          CLERK: '售票员'
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
        if(!checkPass.test(password)){
          passwordError.innerHTML = '密码必须为2-20位';
          flag = false;
        }else {
          passwordError.innerHTML = '';
        }
        return flag;
      },
      add(){
        if(!this.checkInput(this.account.username,this.account.password)) return;
        let account = Object.assign({},this.account);
        let MD5 = require('md5.js');
        account.password = new MD5().update(account.password).digest('hex');
        post('account/add',account)
          .then((response) => {
            if(response.status){
              toastr.success('用户“'+account.username+'”新增成功');
              chComponent(this,'ShowAll',null)
            }
          })
          .catch((error)=>{
            console.log(error);
          });

      },
      cancel(){
        var MD5 = require('md5.js');

        console.log(new MD5().update('42').digest('hex'));
        chComponent(this,'ShowAll',null)
      }
    }
  }
</script>

<style scoped>
  #modify {
    margin-left: 5%;
    margin-right: 5%;
  }

  .modify-form {
    margin-left: 15%;
    margin-right: 15%;
    text-align: left;
  }

</style>
