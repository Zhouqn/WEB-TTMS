<template>
  <div id="modify">
    <form class="modify-form">
      <div class="form-group">
        <label for="play-id">剧目ID</label>
        <input type="text" class="form-control" id="play-id" readonly v-model="parameter.id">
      </div>

      <div class="form-group">
        <label for="play-name">剧目名称</label>
        <input type="text" class="form-control" id="play-name" placeholder="剧目名称" v-model="parameter.name">
      </div>

      <div class="form-group">
        <label for="play-area">来源地区</label>
        <input type="text" class="form-control" id="play-area" placeholder="来源地区" v-model="parameter.area">
      </div>

      <div class="form-group">
        <label for="play-duration">时长</label>
        <input type="number" class="form-control" id="play-duration" placeholder="时长" v-model="parameter.duration">
      </div>

      <div class="form-group">
        <label for="play-startDate">开始时间</label>
        <input type="date" class="form-control" id="play-startDate" v-model="parameter.startDate">
      </div>

      <div class="form-group" id="datetimepicker">
        <label for="play-endDate">结束时间</label>
        <input type="date" class="form-control" id="play-endDate" v-model="parameter.endDate">
      </div>

      <div class="form-group">
        <label for="play-price">票价</label>
        <input type="text" class="form-control" id="play-price" v-model="parameter.price">
      </div>

      <div class="">
        <button type="submit" class="btn btn-warning ">确定</button>
        <button type="submit" class="btn btn-primary ">取消</button>
      </div>
    </form>

  </div>

</template>

<script>
  export default {
    name: "Modify",
    props : ['parameter'],
    data(){
      return{
        studio : null,
      }
    }
  }
</script>

<style scoped>
  #modify{
    margin-left: 5%;
    margin-right: 5%;
  }
  .modify-form {
    margin-left: 15%;
    margin-right: 15%;
    text-align: left;
  }
</style>
