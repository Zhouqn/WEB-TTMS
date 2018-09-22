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
  export default {
    name: "Studio",
    props: ['host'],
    data() {
      return {
        studios: null,
      }
    },
    mounted() {
      this.$axios.get(this.host + 'studio/fetchAll')
        .then((response) => {
          response = response.data.split('\n')
          response[0] = eval('(' + response[0] + ')')
          response[1] = eval('(' + response[1] + ')')
          if (response[0].status) {
            this.studios = response[1];
          } else {
            //如果服务器出现业务级别的错误  那么在控制台打印出出错原因
            console.log(response[1]);
          }
        })
        .catch((error) => {
          console.log(error)
        })
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
