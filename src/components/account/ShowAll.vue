<template>
  <div id="studio">
    <table class="table table-hover">
      <thead>
      <tr>
        <th>编号</th>
        <th>名字</th>
        <th>身份</th>
        <th> </th>
        <th> </th>
      </tr>
      </thead>
      <tbody>

      <!--
      使用vue的for循环，
      通过遍历accounts数组来创建表格，
      非常方便
      -->
      <tr v-for="account in accounts">
        <th>{{account.uid}}</th>
        <th>{{account.username}}</th>
        <th>{{account.type}}</th>
        <th>
          <button @click="modify(account)" class="btn btn-primary btn-sm">修改</button>
        </th>
        <th>
          <button class="btn btn-danger btn-sm">删除</button>
        </th>

      </tr>
      </tbody>
    </table>
    <router-view/>
  </div>
</template>

<script>
  import {get} from '../../units/myHttp'
  import {chComponent} from '../../units/tools'

  export default {
    name: "ShowAll",
    data() {
      return {
        accounts: null,
      }
    },
    methods : {
      modify(account){
        //修改父组件中动态组件的值来改变页面内容
        //改变时可以向对应组件传递一个参数
        chComponent(this,'Modify',account);
        //this.$parent.showComponent(this.$parent.components.Modify)
      }
    },
    /*
    *vue组件生命周期
    *mounted()方法会在组件挂载完成后(也就是点击对应的功能按钮后)执行
    * */
    mounted() {
      //使用myHttp.js中封装的get方法
      get('account/fetchAll')
        .then((response) => {
          if(response.status){
            this.accounts = response.data;
          }else {
            console.warn(response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
</script>

<style scoped>
  .table td,.table th{
    vertical-align:middle;
  }
  #studio{
    margin-left: 5%;
    margin-right: 5%;
  }

</style>
