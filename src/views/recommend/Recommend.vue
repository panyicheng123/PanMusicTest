<template>
  <scroll :scroll-y="true" class="mainScroll" ref="mainScroll">
    <div class="recommend">
      <div class="recommend-content">
        <div class="sliderwrap" v-if="banners.length">
          <slider>
            <div v-for="(item,index) in banners">
              <a :href="item.url"><img :src="item.imageUrl" @load="imageLoad" class="needsclick"></a>
            </div>
          </slider>
        </div>
        <div class="musicListRecommend">
          <span class="listText">热门歌单推荐</span>
          <scroll :scroll-x="true" ref="scroll" class="musicListScroll">
            <div class="musicList" >
                <div class="musicItem" v-for="(item,index) in musicList">
                  <a href="#">
                    <img v-lazy="item.coverImgUrl" class="musicListImg" @load="musicLoad"/>
                    <div class="musicListText">{{item.name}}</div>
                  </a>
                  <div class="collection">
                    <img src="~common/img/recommend/play.png">
                    <span class="playCount">{{item.playCount | playCountFilter}}</span>
                  </div>
                </div>
              </div>
            <div class="load-container" v-if="!this.musicList.length">
              <van-loading type="spinner" color="#1989fa">正在加载...</van-loading>
            </div>
          </scroll>
          </div></div>
        <div class="newMusicRecommend">
          <span class="TitleText">新歌速递</span>
<!--          <scroll :scroll-y="true" style="height: 400px">-->
            <div class="newMusics">
              <div class="newMusicItem" v-for="(item,index) in newMusics">
                <img v-lazy="item.picUrl" class="musicImg" @load="musicLoad">
                <div class="musicInfo">
                  <div class="musicName"><span>{{item.name}}</span>-<span>{{item.song.artists[0].name}}</span></div>
                  <div class="musicDesc">{{item.song.alias[0]}}</div>
                </div>
                <van-button round type="default" size="mini"><img src=""/>播放</van-button>
              </div>
            </div>
<!--          </scroll>-->
        </div>
    </div>
  </scroll>
</template>
TitleText
<script type="text/ecmascript-6">
  import Slider from "../../base/slider/Slider";
  import Scroll from "../../base/scroll/Scroll";
  import {Loading,Button} from 'vant';
  import {getBanners,getMusicList,getNewMusics} from "../../api/recommend";
  export default {
  data(){
    return {
      banners:[],
      musicList:[],
      newMusics:[]
    }
  },
  components:{
    Slider,
    Scroll,
    [Button.name]:Button,
    [Loading.name]:Loading
  },
  created() {
    getBanners().then(res => {
      this.banners = res.banners
    })
    getMusicList(6).then(res => {
      this.musicList = res.playlists
    })
    getNewMusics().then(res => {
      this.newMusics = res.result
    })
  },
  methods:{
    imageLoad(){
      if(!this.imageLoaded){
        this.$refs.scroll.refresh()
        this.imageLoaded = true
      }
    },
    musicLoad(){
      this.$refs.mainScroll.refresh()
      console.log("loading....")
    }
  },
  filters:{
    playCountFilter(value){
      return Math.floor(value/1000) + "万"
    }
  }
  }
</script>
<style scoped>
.mainScroll{
  height: calc(100vh - 98px);
}
.musicListRecommend{
  margin-top: 10px;
  text-align: center;
}
.listText{
  color: #FFB800;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  font-size: medium;
}
.musicListImg{
  opacity: 0.9;
  border-radius: 5px;
  width: 80px;
  height: 80px;
}
.musicList{
  margin-top: 15px;
  width: 600px;
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}
.musicItem{
  position: relative;
  width: 80px;
}
.musicItem > a{
  width: 80px;
  display: flex;
  flex-direction: column;
  font-size: medium;
}
.musicListText {
  margin-top: 10px;
  font-size: small;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #cccccc;
}
.collection{
  box-sizing: border-box;
  position: absolute;
  padding: 0px 5px;
  top: 0;
  right: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: right;
}
.collection > img{
  vertical-align: middle;
}
.playCount{
 font-size: smaller;
}
.musicListScroll{
  position: relative;
}
.load-container{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
.newMusicRecommend{
  margin-top: 15px;
}
.TitleText{
  width: 100%;
  height: 22px;
  line-height: 22px;
  text-align: left;
  padding: 0px 15px;
  color: #FFB800;
}
.newMusics{
  margin-top: 15px;
}
.newMusicItem{
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0px;
}
.musicImg{
  border-radius: 10px;
  width: 64px;
  height: 64px;
}
.musicInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 230px;
}
.musicName{
  margin: 5px 0px;
  color: white;
  font-weight: bold;
}
.musicDesc{
  margin: 5px 0px;
  font-size: small;
  color: #cccccc;
}
</style>
