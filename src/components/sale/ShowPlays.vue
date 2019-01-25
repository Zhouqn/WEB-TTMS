<template>
  <div id="play">
    <div class="form-inline">
      <div class="form-group inline" style="margin-left: 2%">
        <input @input="view.curPage = 1" v-model="view.keywords" name="KeyWord" class="form-control mr-sm-2" type="text" placeholder="过滤">
      </div>
      <b class="zi zi_searchBlack" style="background:none; margin-left:-2.3rem; color:#ff9d00;"></b>

    </div>
    <br/>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>名称</th>
        <th>国家</th>
        <th>时长</th>
        <!--<th>上映日期</th>-->
        <th>价格</th>
        <th></th>
      </tr>
      </thead>
      <tbody>

      <!--
      使用vue的for循环，
      通过遍历studios数组来创建表格，
      非常方便
      -->
      <tr v-for="play in plays().slice((this.view.curPage - 1) * this.view.pageSize,this.view.curPage * this.view.pageSize)">
        <th>{{play.id}}</th>
        <th>{{play.name}}</th>
        <th>{{play.area}}</th>
        <th>{{play.duration}}</th>
        <!--<th>{{play.startDate}}</th>-->
        <th>{{play.price}}</th>

        <th>
          <button @click="sale(play)" class="btn btn-primary btn-sm">售票</button>
        </th>


      </tr>
      </tbody>
    </table>
    <div style="text-align: center">
      <button @click="view.curPage--" class="btn btn-light btn-sm" v-bind:disabled="view.curPage <= 1">上一页</button>
      第 {{view.curPage}} / {{view.totalPage()}} 页
      <button @click="view.curPage++" class="btn btn-light btn-sm" v-bind:disabled="view.curPage >= view.totalPage()">下一页</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {get,post} from '../../units/myHttp'
  import {chComponent} from '../../units/tools'

  export default {
    name: "ShowPlays",
    data() {
      return {
        view: {
          keywords : '',
          pageSize : 5,
          curPage : 1,
          totalPage : () => this.plays() != null ? Math.ceil(this.plays().length  / this.view.pageSize) : 1
        },
        plays_all: null,
        plays : () => this.plays_all != null
          ? this.search(this.plays_all,this.view.keywords) : [],
      }
    },
    methods : {
      search(plays,keywords){
        let newArr = [];
        plays.forEach((play) => {
          let objStr = play['id'] + play['name'] + play['area'] + play['price'];

          if(objStr.indexOf(keywords) > -1) {
            newArr.push(play)
          }
        });

        return newArr;


      },
      sale(play){
        //修改父组件中动态组件的值来改变页面内容
        //改变时可以向对应组件传递一个参数
        chComponent(this,'ShowScheduleByPlay',play);
        //this.$parent.showComponent(this.$parent.components.Modify)
      },
    },
    /*
    *vue组件生命周期
    *mounted()方法会在组件挂载完成后(也就是点击对应的功能按钮后)执行
    * */
    mounted() {
      //使用myHttp.js中封装的get方法
      get('play/fetchAll')
        .then((response) => {
          if(response.status){
            this.plays_all = response.data;
          }else {
            console.warn(response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  }
</script>

<style scoped>
  .table td,.table th{
    vertical-align:middle;
  }
  #play{
    margin-left: 5%;
    margin-right: 5%;
  }

</style>
