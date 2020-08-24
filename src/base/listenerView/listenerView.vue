<template>
  <scroll :scroll-y="true" class="listennerView">
    <ul>
     <li v-for="(value,key,index) in data">
       <h2>{{key}}</h2>
     </li>
    </ul>
  </scroll>
</template>

<script>
  import Scroll from "../scroll/Scroll";
  export default {
    name: "listenerView",
    components: {Scroll},
    props:{
      data:{
        type:Object,
        default:{}
      }
    },
    created() {
      this.$forceUpdate()
    },
    mounted() {

    }
  }
</script>

<style scoped  rel="stylesheet/stylus">

</style>
