<template>
  <div id="app" class="container-fluid">
    <div class="d-flex">
      <div id="leftNavBar">
        <div class="list-group list-group-flush" id="list-tab" role="tablist">
          <router-link class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list"
                       to="/">Welcome！
          </router-link>
          <router-link class="list-group-item list-group-item-action" id="list-studio-list" data-toggle="list"
                       to="/studio">演出厅管理
          </router-link>
          <router-link class="list-group-item list-group-item-action" id="list-schedule-list" data-toggle="list"
                       to="/schedule">演出计划管理
          </router-link>
          <router-link class="list-group-item list-group-item-action" id="list-play-list" data-toggle="list"
                       to="/play">
            剧目管理
          </router-link>
          <router-link class="list-group-item list-group-item-action" id="list-account-list" data-toggle="list"
                       to="/account">用户管理
          </router-link>
        </div>
      </div>

      <!--flex-grow-1是bootstrap4.1新特性 使得弹性布局下的元素尽量占据剩余宽度-->
      <div id="context" class="flex-grow-1">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        host: 'http://fujie.bid/TTMS_TEST/'
      }
    },
    mounted() {
      //$('#list-tab a').off()
      $('#list-tab a')
        .on('click', function (e) {
          e.preventDefault();

          //经过测试  按钮的按下特效和vue路由的选中冲突  表现为按下按钮的瞬间 按钮特效的对应的class被加入
          //紧接着 vue路由被选中对应的class被加入 导致按下特效的class丢失，因此在这里使用setTimeout在10毫秒后
          //再加入按钮按下特效  保证了特效的展示
          setTimeout(() => {
            $(this).tab('show')
          }, 10)

        })
    }
  }
</script>

<style>
  #app {
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }

  #leftNavBar {

  }

  #list-tab {

  }

  #context {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .list-group-item {
    padding-left: 20px;
    padding-right: 40px;
  }

</style>
