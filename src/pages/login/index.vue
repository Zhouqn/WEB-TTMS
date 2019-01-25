<template>
  <div id="index" class="form-sign text-center">

    <div class="form-sign">
      <!--<h4>-->
        <!--<img class="logo" src="../assets/xiyoulinux.png" alt="" width="30%">-->
        <!--&nbsp;&nbsp;+&nbsp;&nbsp;-->
        <!--<img class="logo" src="../assets/sfd.png" alt="" width="30%">-->
      <!--</h4>-->
      <h1 class="h2 mb-4 font-weight-normal">HLW剧院票务管理系统</h1>
      <input type="text" id="username" v-model="form.username" @blur="checkName" class="form-control"
             placeholder="请输入用户名" required>
      <input type="password" id="password" v-model="form.password" @input="checkPassword" class="form-control"
             placeholder="请输入密码"
             required>


      <button id="submit" class="btn btn-lg btn-primary btn-block" type="submit" @click="submit"
              v-bind:disabled="view.isDisableButton">登录
      </button>
    </div>

  </div>
</template>

<script>
  import {post} from "../../units/myHttp";

  export default {
    name: "Login",
    data() {
      return {
        view: {
          // isShowCheckCode: false,//用来决定验证码是是否显示
          isDisableButton: true, //是否禁用button
          is_check: 0,
          flagMap: {
            max: 3,
            username: 0b1,
            password: 0b10,
            admin_class: 0b100,
            checkCode: 0b1000
          },
        },
        form: {
          username: '',
          password: '',
        },

      }
    },
    methods: {
      setInvalid(id) {
        //与运算 将某一标志位置空
        this.view.is_check &= ~this.view.flagMap[id];
        this.view.isDisableButton = (this.view.is_check < this.view.flagMap.max);
        document.getElementById(id).classList.add('is-invalid');
      },
      setNormal(id) {
        //或运算 设置某一标志位
        this.view.is_check |= this.view.flagMap[id];
        this.view.isDisableButton = (this.view.is_check < this.view.flagMap.max);
        document.getElementById(id).classList.remove('is-invalid');
      },
      checkPassword() {
        let re = /.{2,26}/;
        if (re.test(this.form.password)) {
          this.setNormal('password');
          return true;
        } else {
          this.setInvalid('password');
          return false;
        }
      },
      checkName() {
        if (this.form.username === '') {
          this.setInvalid('username');
          toastr.warning('用户名不能为空');
          return false;
        } else {
          this.setNormal('username');
          return true;
        }
      },
      checkClass() {
        if (this.form.admin_class === '') {
          this.setInvalid('admin_class');
        } else {
          this.setNormal('admin_class');
        }
      },
      submit() {
        window.event.returnValue=false;

        if(!this.checkPassword()){
          toastr.warning('密码不合法鸭');
          return;
        }
        let user = Object.assign({},this.form);
        let MD5 = require("md5.js");

        user.password = new MD5().update(user.password).digest("hex");
        post('login',user)
          .then((response) => {
            console.log(response);
            if(response.status){
              location.href = 'home.html';
            }else {
              toastr.warning('用户名或密码错误')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },

    },
    props: ['host', 'activity'],
    mounted() {
       toastr.options.positionClass = 'toast-top-center';
    },

  }
</script>

<style scoped>

  #toast-container{
    margin-top: 10%;
  }
  #username {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  #password {
    margin-bottom: 1.5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  #admin_class {
    margin-bottom: 1.5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  #readme-button {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  #exampleModal {
    text-align: left;
  }


</style>
