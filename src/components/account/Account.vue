<template>

  <div class="bs-example" data-example-id="panel-without-body-with-table">
    <div class="panel panel-default">
      <!-- Default panel contents -->
      <div class="panel-heading">用户管理</div>

      <!-- Table -->
      <table class="table">
        <thead>
        <tr>
          <th>序号</th>
          <th>用户姓名</th>
          <th>身份</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row"><span class="badge">1</span></th>
          <td>刘付杰</td>
          <td>经理</td>
          <td><button id="cha1" type="button" class="btn btn-default">修改</button></td>
          <td><button id="del1" type="button" class="btn btn-default">删除</button></td>
        </tr>
        <tr>
          <th scope="row"><span class="badge">2</span></th>
          <td>纪龙</td>
          <td>管理员</td>
          <td><button id="cha2" type="button" class="btn btn-default">修改</button></td>
          <td><button id="del2" type="button" class="btn btn-default">删除</button></td>
        </tr>
        <tr>
          <th scope="row"><span class="badge">3</span></th>
          <td>王哲</td>
          <td>管理员</td>
          <td><button id="cha3" type="button" class="btn btn-default">修改</button></td>
          <td><button id="del3" type="button" class="btn btn-default">删除</button></td>
        </tr>
        <tr>
          <th scope="row"><span class="badge">4</span></th>
          <td>pyy</td>
          <td>售票员</td>
          <td><button id="cha4" type="button" class="btn btn-default">修改</button></td>
          <td><button id="del4" type="button" class="btn btn-default">删除</button></td>
        </tr>
        <tr>
          <th scope="row"><span class="badge">5</span></th>
          <td>zqn</td>
          <td>售票员</td>
          <td><button id="cha5" type="button" class="btn btn-default">修改</button></td>
          <td><button id="del5" type="button" class="btn btn-default">删除</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Account",

    }
</script>

<style scoped>

  .panel-heading{
    font-family: 楷体 ;
    font-size: 40px;
  }

  .bs-example {
    margin-left: 50px;
    margin-right: 50px;
  }
  .panel-heading{
    margin-bottom:10px;
  }
  #cha1,#cha2,#cha3,#cha4,#cha5{
    width: 50px;
    background-color: darkorange;
    border-color: darkgray;
    color: white;
    border-radius: 20px;
    padding: 1px;
  }
  #del1,#del2,#del3,#del4,#del5{
    width: 50px;
    background-color: red;
    border-color: darkgray;
    color: white;
    border-radius: 20px;
    padding: 1px;
  }

  .badge{
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
  }

</style>
