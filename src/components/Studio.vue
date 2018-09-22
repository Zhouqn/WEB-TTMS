<template>
  <div id="studio">
    <h1>演出厅列表</h1>
    <table class="table">
      <thead>
      <tr>
        <th>编号</th>
        <th>名字</th>
        <th>座位数</th>
        <th>修改</th>
        <th>删除</th>
      </tr>
      </thead>
      <tbody>

      <!--
      使用vue的for循环，
      通过遍历studios数组来创建表格，
      非常方便
      -->
      <tr v-for="studio in studios">
        <th>{{studio.id}}</th>
        <th>{{studio.name}}</th>
        <th>{{studio.count}}</th>
        <th>
          <button class="btn btn-primary btn-sm">修改</button>
        </th>
        <th>
          <button class="btn btn-danger btn-sm">删除</button>
        </th>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {get} from '../units/myHttp'

  export default {
    name: "Studio",
    props: ['host'],
    data() {
      return {
        studios: null,
      }
    },
    /*
    *vue组件生命周期
    *mounted()方法会在组件挂载完成后(也就是点击对应的功能按钮后)执行
    * */
    mounted() {

      //使用myHttp.js中封装的get方法
      get('studio/fetchAll')
        .then((response) => {
          if(response.status){
            this.studios = response.data;
          }else {
            console.warn(response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
      console.log('zqn')
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
