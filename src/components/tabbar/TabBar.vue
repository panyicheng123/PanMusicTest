<template>
  <div id="tabbar">
    <router-link class="item" to="/recommend" tag="div">
      <span class="itemText">推荐</span>
    </router-link>
    <router-link class="item"  to="/singer" tag="div">
      <span class="itemText">歌手</span>
    </router-link>
    <router-link class="item" to="/rank" tag="div">
      <span class="itemText">排行</span>
    </router-link>
    <router-link class="item" to="/search" tag="div">
      <span class="itemText">搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
#tabbar{
  display: flex;
  height: 44px;
  line-height: 44px;
  margin-bottom: 10px;
}
.item{
  flex: 1;
  font-size: medium;
  text-align: center;
}
.router-link-active .itemText{
  color: white;
  font-size: large;
  font-weight: bold;
  border-bottom: solid 2px white;
}
.itemText{
  padding: 5px;
  color: #cccccc;
}
</style>
