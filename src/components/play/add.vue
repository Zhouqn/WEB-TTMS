<template>
  <div id="add" class="row">
    <div class="col-6 col-md-6">
      <img v-bind:src="play.imgUrl" style="max-width: 350px; max-height: 570px; min-height: 89%"/>
      <br/><br/>
      <span class="file">上传封面
        <input type="file" @change="updateImg" class="btn" accept="image/png,image/gif,image/jpeg"/>
      </span>
    </div>
    <div class="modify-form col-6 col-md-6">
      <div class="form-group">
        <label for="play-name">剧目名称 <span v-if="inputError.name" style="color: red">名称必须在1到30个字符之间</span></label>
        <input type="text" class="form-control" id="play-name" placeholder="剧目名称" v-model="play.name">
      </div>

      <div class="form-group">
        <label for="play-area">来源地区<span v-if="inputError.area" style="color: red">地区必须在1-10个字符之间</span></label>
        <input type="text" class="form-control" id="play-area" placeholder="来源地区" v-model="play.area">
      </div>

      <div class="form-group">
        <label for="play-duration">时长 <span v-if="inputError.duration " style="color: red">时长必须在10-300之间</span></label>
        <input type="number" class="form-control" id="play-duration" placeholder="时长" v-model="play.duration">
      </div>

      <div class="form-group">
        <label for="play-startDate">开始时间</label>
        <input type="date" class="form-control" id="play-startDate" v-model="play.startDate">
      </div>

      <div class="form-group" id="datetimepicker">
        <label for="play-endDate">结束时间</label>
        <input type="date" class="form-control" id="play-endDate" v-model="play.endDate">
      </div>

      <div class="form-group">
        <label for="play-price">票价 <span v-if="inputError.price " style="color: red">票价必须大于0</span></label>
        <input type="number" class="form-control" id="play-price" v-model="play.price">
      </div>

      <div class="" style="text-align: center;">
        <button @click="add(play)" type="submit" class="btn btn-warning " >确定</button>
        <span style="margin: 10%"></span>
        <button @click="cancel" type="submit" class="btn btn-primary " >取消</button>
      </div>
    </div>

  </div>

</template>

<script>
  import {http,post} from "../../units/myHttp";
  import {host} from "../../units/config";
  import {chComponent} from "../../units/tools";

  export default {
    name: "Add",
    data(){
      return{
        play : {
          imgUrl : '',
          rating : 'CHILD',
          type : 'FILE'
        },
        inputError : {
          name : false,
          duration : false,
          area : false,
          price : false
        }

      }
    },
    methods :{
      updateImg(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('file',file);//通过append向form对象添加数据
        // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }; //添加请求头
        http.post(host + 'fileUpload',param,config)
          .then(response=>{
            this.play.imgUrl = host + 'ttms_upload/' + param.get('file').name;
          })
          .catch((error) => {
            console.log(error)
          })
      },
      checkInput(name,duration,area,price){
        let flag = true;
        if(name == null || !/^.{1,30}/.test(name)){
          flag = false;
          this.inputError.name = true
        }else {
          this.inputError.name = false;
        }
        if(duration == null || duration > 300 || duration < 10){
          flag = false;
          this.inputError.duration = true;
        }else {
          this.inputError.duration = false;
        }
        if(area == null || !/^.{1,20}$/.test(area)){
          flag = false;
          this.inputError.area = true
        }else {
          this.inputError.area = false;
        }
        if( price == null || price < 0){
          flag = false;
          this.inputError.price = true;
        }else {
          this.inputError.price = false;
        }
        return flag;
      },
      add(play){
        if(!this.checkInput(play.name,play.duration,play.area,play.price)) return;
        post('play/add',play)
          .then((response) => {
            if(response.status){
              toastr.success("新增剧目成功！");
              chComponent(this,'ShowAll',null)
            }else {
              console.log(response);
              toastr.error("新增失败！请重试")
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
      cancel(){
        chComponent(this,'ShowAll',null)
      }
    }
  }
</script>

<style scoped>
  #add{
    margin-left: 5%;
    margin-right: 5%;
  }
  .modify-form {

    text-align: left;
  }
  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
