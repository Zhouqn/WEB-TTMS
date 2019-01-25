<template>
  <div id="home" class="container-fluid">
    <nav class="navbar navbar-dark" style="background-color: #117a8b;">
      <a class="navbar-brand" href="#">HLW</a>
      <span class="navbar-brand">{{title}}</span>
      <span>
              <a class="zi zi_useralt zi_1x" style="color: white" href="">&nbsp;&nbsp;{{user.username}}</a>
        &nbsp;&nbsp;&nbsp;
              <button @click="logout" class="btn btn-link" style="color: white">注销</button>

      </span>
    </nav>
    <div id="context-all" class="d-flex">
      <div id="leftNavBar">
        <div class="list-group list-group-flush" id="list-tab" role="tablist">
          <router-link class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="tab" aria-selected="true"
                       to="/">Welcome！
          </router-link>
          <div class="admin-tab" v-if="user.type === 'ADMIN' || user.type === 'MANG'">
            <router-link class="list-group-item list-group-item-action" id="list-account-list" data-toggle="tab" aria-selected="false"
                         to="/account">用户管理
            </router-link>
            <router-link class="list-group-item list-group-item-action" id="list-play-list" data-toggle="tab" aria-selected="false"
                         to="/play">
              剧目管理
            </router-link>
            <router-link class="list-group-item list-group-item-action" id="list-studio-list" data-toggle="tab" aria-selected="false"
                         to="/studio">演出厅管理
            </router-link>
            <router-link class="list-group-item list-group-item-action" id="list-schedule-list" data-toggle="tab" aria-selected="false"
                         to="/schedule">演出计划管理
            </router-link>
          </div>
          <div v-else-if="user.type === 'CLERK'">
            <router-link class="list-group-item list-group-item-action" id="seal" data-toggle="tab"
                         to="/sale">售票
            </router-link>
            <router-link class="list-group-item list-group-item-action" id="return" data-toggle="tab"
                         to="/return">退票
            </router-link>
          </div>
        </div>
      </div>
      <!--flex-grow-1是bootstrap4.1新特性 使得弹性布局下的元素尽量占据剩余宽度-->
      <div id="context" class="flex-grow-1">
        <transition name="fade-transform" mode="out-in">
          <router-view @title="setTitle"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import {post, get} from "../../units/myHttp";

  export default {
    name: 'App',
    data() {
      return {
        title: '',
        user: {}
      }
    },
    methods: {
      setTitle(title) {
        this.title = title;
      },
      logout() {
        get('/logout')
          .then((response) => {
            if (response.status) {
              toastr.success("注销成功！");
              setTimeout(() => location.href = 'index.html', 1000)
            }
          })
      }
    },
    mounted() {
      // $('#list-tab a').off();
      // $('#list-tab #admin-tab a')
      //   .on('click', function (e) {
      //     e.preventDefault();
      //
      //     //经过测试  按钮的按下特效和vue路由的选中冲突  表现为按下按钮的瞬间 按钮特效的对应的class被加入
      //     //紧接着 vue路由被选中对应的class被加入 导致按下特效的class丢失，因此在这里使用setTimeout在10毫秒后
      //     //再加入按钮按下特效  保证了特效的展示
      //     setTimeout(() => {
      //       $(this).tab('show');
      //       console.log('男男')
      //     }, 10)
      //
      //   });
      toastr.options.positionClass = 'toast-top-center';
      get('getUser')
        .then((response) => {
          console.log(response);
          if (response.status) {
            this.user = response.data;
          } else {
          }
        });
    },

  }
</script>

<style>


  #leftNavBar {
  }

  #list-tab {
  }

  #context {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  #context-all {
    padding-top: 2%;

  }

  .list-group-item {
    padding-left: 20px;
    padding-right: 40px;
    margin-bottom: 25px;
    background-color: lavender;
  }

  #toast-container {
    margin-top: 10%;
  }

</style>
