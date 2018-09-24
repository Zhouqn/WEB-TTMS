<template>
  <div id="modify">
    <form class="modify-form">
      <div class="form-group">
        <label for="studio-id">演出厅编号</label>
        <input type="text" class="form-control" id="studio-id" readonly v-model="parameter.id">
      </div>
      <div class="form-group">
        <label for="studio-name">演出厅名称</label>
        <input type="text" class="form-control" id="studio-name" placeholder="演出厅名称" v-model="parameter.name">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="row-count">座位行数</label>
          <input type="number" class="form-control" id="row-count" placeholder="座位行数" v-model="parameter.row">
        </div>
        <div class="form-group col-md-6">
          <label for="col-count">座位列数</label>
          <input type="number" class="form-control" id="col-count" placeholder="座位列数" v-model="parameter.col">
        </div>
      </div>
      <div class="form-group">
        <label for="studio-introduction">演出厅描述</label>
        <textarea class="form-control" id="studio-introduction" rows="3" v-model="parameter.introduction"></textarea>
      </div>
      <div class="">
        <button type="submit" class="btn btn-warning ">取 消</button>
        <button type="submit" class="btn btn-primary ">下一步</button>
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
