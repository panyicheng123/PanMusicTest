<template>
<div class="singer">
  <listener-view :data="singerList"></listener-view>
</div>
</template>

<script>
  import Singer from "common/js/Singer";
  import listenerView from "../../base/listenerView/listenerView";

  import {getSingers,getHotSingers} from "api/singer";
  export default {
    name: "Singer",
    data(){
      return {
        singerList:{}
      }
    },
    components:{
      listenerView
    },
    created() {
      //自定义数据格式,获得a-z的著名歌手
      for (let i = 0;i<26;i++){
        let findIndex = String.fromCharCode((65+i)).toLowerCase()
        getSingers(-1,-1,findIndex,3).then(res => {
          this.singerList[findIndex] = {}
          this.singerList[findIndex].items = new Array()
          for (let i = 0;i<res.artists.length;i++) {
            let singer = new Singer(res.artists[i].id,findIndex,res.artists[i].name,res.artists[i].picUrl)
            this.singerList[findIndex].items.push(singer)
          }
        })
      }
      //获得热门歌手
      getHotSingers(5).then(res => {
        this.singerList[0] = {}
        this.singerList[0].items = new Array()
        for(let i=0;i<res.artists.length;i++){
          let singer = new Singer(res.artists[i].id,"热门",res.artists[i].name,res.artists[i].picUrl)
          this.singerList[0].items.push(singer)
        }
      })
    },
    methods:{
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
