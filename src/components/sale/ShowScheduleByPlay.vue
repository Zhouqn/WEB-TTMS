<template>
  <div id="schedule">
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
        <th>编号</th>
        <th>剧目名</th>
        <th>演出厅名</th>
        <th>演出时间</th>
        <!--<th>上映日期</th>-->
        <th>余票</th>
        <th></th>
      </tr>
      </thead>
      <tbody>

      <!--
      使用vue的for循环，
      通过遍历studios数组来创建表格，
      非常方便
      -->
      <tr v-for="schedule in schedules().slice((this.view.curPage - 1) * this.view.pageSize,this.view.curPage * this.view.pageSize)">
        <th>{{schedule.id}}</th>
        <th>{{schedule.play.name}}</th>
        <th>{{schedule.studio.name}}</th>
        <th>{{schedule.date.year}}-{{schedule.date.month}}-{{schedule.date.day}} {{schedule.time.hour}}:{{schedule.time.minute}}</th>
        <!--<th>{{schedule.startDate}}</th>-->
        <th>{{schedule.ticketCount}}</th>

        <th>
          <button @click="choseSeat(schedule)" class="btn btn-primary btn-sm">选座</button>
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
    name: "ShowScheduleByPlay",
    props : ['parameter'],
    data() {
      return {
        view: {
          keywords : '',
          pageSize : 5,
          curPage : 1,
          totalPage : () => this.schedules() != null ? Math.ceil(this.schedules().length  / this.view.pageSize) : 1
        },
        schedules_all: null,
        schedules : () => this.schedules_all != null
          ? this.search(this.schedules_all,this.view.keywords) : [],
      }
    },
    methods : {
      search(schedules,keywords){
        let newArr = [];
        schedules.forEach((schedule) => {
          let objStr = schedule['id'] + schedule['play']['name'] + schedule['studio']['name'] + schedule['ticketCount'];

          if(objStr.indexOf(keywords) > -1) {
            newArr.push(schedule)
          }
        });

        return newArr;


      },
      choseSeat(schedule){
        //修改父组件中动态组件的值来改变页面内容
        //改变时可以向对应组件传递一个参数
        chComponent(this,'Modify',schedule);
        //this.$parent.showComponent(this.$parent.components.Modify)
      },
    },
    /*
    *vue组件生命周期
    *mounted()方法会在组件挂载完成后(也就是点击对应的功能按钮后)执行
    * */
    mounted() {
      console.log(this.parameter)
      //使用myHttp.js中封装的get方法
      post('schedule/fetchByPlay',this.parameter)
        .then((response) => {
          if(response.status){
            this.schedules_all = response.data;
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
  #schedule{
    margin-left: 5%;
    margin-right: 5%;
  }

</style>
