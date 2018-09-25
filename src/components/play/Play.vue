<template>
  <component v-bind:is="currentComponent" :parameter="parameter" />
</template>
<script>
  import ShowAll from './ShowAll'
  import Modify from './Modify'

  export default {
    name: "Play",
    data(){
      return{
        components : {
          ShowAll : ShowAll,
          Modify : Modify
        },
        currentComponent : ShowAll,
        parameter : null
      }
    },
    methods : {
      showComponent(component) {
        this.currentComponent = component;
      }
    },
    mounted(){

      //在组件挂载完成后向父组件发送title事件,使得父组件修改标题
      this.$emit('title','剧目管理');
    }
  }


</script>

<style scoped>

</style>
<!--<template>-->
  <!--<div id="play">-->
<!--&lt;!&ndash;    <h1 class="panel-heading" >剧目管理</h1>&ndash;&gt;-->
    <!--<table class="table table-hover table table-condensed">-->
      <!--<thead>-->
        <!--<tr>-->
          <!--<th>#</th>-->
          <!--<th>电影</th>-->
          <!--<th>主演</th>-->
          <!--<th>上映时间</th>-->
          <!--<th>评分</th>-->
          <!--<th></th>-->
        <!--</tr>-->

        <!--<tr>-->
          <!--<td scope="row"><span class="badge">1</span></td>-->
          <!--<td>《传奇的诞生》</td>-->
          <!--<td>凯文·德·保拉,贝利,索·豪黑</td>-->
          <!--<td>2018-09-07</td>-->
          <!--<td id="num1">9.7</td>-->
          <!--<td><button type="button" class="btn btn-info btn-sm" onclick="location.href='#'">修改</button></td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td scope="row"><span class="badge">2</span></td>-->
          <!--<td>《西虹市首富》</td>-->
          <!--<td>沈腾,宋芸桦,张一鸣</td>-->
          <!--<td>2018-07-27</td>-->
          <!--<td id="num2">9.2</td>-->
          <!--<td><button type="button" class="btn btn-info btn-sm" onclick="location.href='#'">修改</button></td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td scope="row"><span class="badge">3</span></td>-->
          <!--<td>《爸，我一定行的》</td>-->
          <!--<td>郑润奇,郑鹏生,张咏娴</td>-->
          <!--<td>2018-08-24</td>-->
          <!--<td id="num3">9.2</td>-->
          <!--<td><button type="button" class="btn btn-info btn-sm" onclick="location.href='#'">修改</button></td>-->
        <!--</tr>-->
        <!--<tr>-->
          <!--<td scope="row"><span class="badge">4</span></td>-->
          <!--<td>《悲伤逆流成河》</td>-->
          <!--<td>赵英博,任敏,辛云来</td>-->
          <!--<td>2018-09-21</td>-->
          <!--<td id="num4">9.1</td>-->
          <!--<td><button type="button" class="btn btn-info btn-sm" onclick="location.href='#'">修改</button></td>-->
        <!--</tr>-->
      <!--</thead>-->
    <!--</table>-->
  <!--</div>-->

<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "Play",-->

         <!--mounted(){-->
        <!--this.$emit('title','剧目管理')-->
      <!--}-->
    <!--}-->

<!--</script>-->

<!--<style scoped>-->
 <!--/* .panel-heading{-->
    <!--font-family: 楷体 ;-->
    <!--font-size: 40px;-->
  <!--}*/-->
  <!--#play{-->
    <!--margin-left: 5%;-->
    <!--margin-right: 5%;-->
  <!--}-->
  <!--#num1,#num2,#num3,#num4 {-->
    <!--font-family: 华文琥珀;-->
    <!--color: #ffc107;-->
    <!--font-size: x-large;-->
  <!--}-->
  <!--.badge{-->
    <!--display: inline-block;-->
    <!--min-width: 10px;-->
    <!--padding: 3px 7px;-->
    <!--font-size: 12px;-->
    <!--font-weight: 700;-->
    <!--line-height: 1;-->
    <!--color: #fff;-->
    <!--text-align: center;-->
    <!--white-space: nowrap;-->
    <!--vertical-align: middle;-->
    <!--background-color: #777;-->
    <!--border-radius: 10px;-->
  <!--}-->

<!--</style>-->
