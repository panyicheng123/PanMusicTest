<template>
  <div id="app">
    <Header class="header"></Header>
    <TabBar class="tabbar"></TabBar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "components/m-header/Header";
import TabBar from "components/tabbar/TabBar";
export default {
  name: 'App',
  components:{
    Header,
    TabBar
  }
}
</script>
<style>
.header{
  background-color: #1e243c;
  position: relative;
  z-index: 10;
}
.tabbar{
  background-color: #1e243c;
  position: relative;
  z-index: 10;
}
</style>
