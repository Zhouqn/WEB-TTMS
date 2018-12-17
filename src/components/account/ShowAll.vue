<template>
  <div id="studio">
    <div class="form-inline" role="search" >
      <div class="form-group inline" style="margin-left: 2%">
        <input @input="view.curPage = 1" v-model="view.keywords" name="KeyWord" class="form-control mr-sm-2" type="text" placeholder="过滤">
      </div>
      <b class="zi zi_searchBlack" style="background:none; margin-left:-2.3rem; color:#ff9d00;"></b>
      <div class="form-group " style="margin-right: 2%; margin-left: auto">
        <button @click="add" class="zi zi_userplus btn btn-light " > &nbsp;新增用户</button>
      </div>
    </div>
    <br/>

    <table class="table table-hover">
      <thead>
      <tr>
        <th>编号</th>
        <th>名字</th>
        <th>身份</th>
        <th> </th>
        <th></th>
      </tr>
      </thead>
      <tbody>

      <!--
      使用vue的for循环，
      通过遍历accounts数组来创建表格，
      非常方便
      -->
      <tr v-for="account in accounts().slice((this.view.curPage - 1) * this.view.pageSize,this.view.curPage * this.view.pageSize)">
        <th>{{account.uid}}</th>
        <th>{{account.username}}</th>
        <th>{{ACCOUNT_TYPE[account.type]}}</th>
        <th>
          <button @click="modify(account)" class="btn btn-info btn-sm">修改</button>
        </th>

        <th>
          <button @click="deleteUser(account)" class="btn btn-danger btn-sm">删除</button>
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
    name: "ShowAll",
    data() {
      return {
        view: {
          keywords : '',
          pageSize : 5,
          curPage : 1,
          totalPage : () => this.accounts() != null ? Math.ceil(this.accounts().length  / this.view.pageSize) : 1
        },
        accounts_all: null,
        accounts : () => this.accounts_all != null
          ? this.search(this.accounts_all,this.view.keywords) : [],
        //这里 使用ACCOUNT_TYPE对象将用户类型的简写与中文对应起来
        ACCOUNT_TYPE :{
          ADMIN : '管理员',
          MANG : '经理',
          CLERK : '售票员'
        }
      }
    },
    methods : {
      search(accounts,keywords){
        let newArr = [];
        accounts.forEach((account) => {
          let objStr = account['uid'] + account['username'] + this.ACCOUNT_TYPE[account['type']];

          if(objStr.indexOf(keywords) > -1) {
            newArr.push(account)
          }
        });

        return newArr;


      },
      modify(account){
        //修改父组件中动态组件的值来改变页面内容
        //改变时可以向对应组件传递一个参数
        chComponent(this,'Modify',account);
        //this.$parent.showComponent(this.$parent.components.Modify)
      },
      add(){
        chComponent(this,'Add',null)
      },
      deleteUser(account){
        post('account/delete',account)
          .then((response)=>{
            if(response.status){
              toastr.success('用户“'+account.username+'”删除成功！');
              chComponent(this,'为了让页面刷新',null);
              setTimeout(() => chComponent(this,'ShowAll',null),10)
            }else {
              toastr.error('删除失败！')
            }
          }).catch(error=>{
            console.log(error)
        })
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
            this.accounts_all = response.data;
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
