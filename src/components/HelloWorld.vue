<template>
  <div class="hello">
  <h1>欢迎使用HLW剧院票务管理系统</h1>
    <h6>内容再稍微宽一点就不会显得居中问题很严重(参考演出厅管理)</h6>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.$emit('title','欢迎页')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
