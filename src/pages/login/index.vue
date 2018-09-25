<template>
  <div id="index" class="form-sign text-center">

    <form class="form-sign">
      <!--<h4>-->
        <!--<img class="logo" src="../assets/xiyoulinux.png" alt="" width="30%">-->
        <!--&nbsp;&nbsp;+&nbsp;&nbsp;-->
        <!--<img class="logo" src="../assets/sfd.png" alt="" width="30%">-->
      <!--</h4>-->
      <h1 class="h2 mb-4 font-weight-normal">HLW剧院票务管理系统</h1>
      <input type="text" id="user_name" v-model="form.user_name" @blur="checkName" class="form-control"
             placeholder="请输入用户名" required>
      <input type="password" id="password" v-model="form.password" @input="checkPassword" class="form-control"
             placeholder="请输入密码"
             required>


      <button id="submit" class="btn btn-lg btn-primary btn-block" type="submit" @click="submit"
              v-bind:disabled="view.isDisableButton">登录
      </button>
    </form>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        view: {
          isShowCheckCode: false,//用来决定验证码是是否显示
          isDisableButton: true, //是否禁用button
          is_check: 0,
          flagMap: {
            max: 3,
            user_name: 0b1,
            password: 0b10,
            admin_class: 0b100,
            checkCode: 0b1000
          },
        },
        form: {
          user_name: '',
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
        let re = /.{6,26}/;
        if (re.test(this.form.password)) {
          this.setNormal('password');
        } else {
          this.setInvalid('password')
        }
      },
      checkName() {
        if (this.form.user_name === '') {
          this.setInvalid('user_name');
        } else {
          this.setNormal('user_name');
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
        window.location.href = 'home.html';
      },

    },
    props: ['host', 'activity'],
    mounted() {
      // toastr.options.positionClass = 'toast-top-center';
    },

  }
</script>

<style scoped>

  .logo {
    margin-bottom: 1.5rem;
  }

  #student_no {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  #password {
    margin-bottom: 1.5rem;
    border-radius: 0;
  }
  #real_name {
    margin-bottom: -1px;
    border-radius: 0;
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
