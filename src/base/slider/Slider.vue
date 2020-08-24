<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots" :class="{active:currentIndex===index}" v-if="isShowDots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll"

  import {addClass} from "../../common/js/doom";

  export default {
    data() {
      return {
        dots: [],
        currentIndex: 0,
        timer:Function
      }
    },
    props: {
      loop: {//是否循环轮播
        type: Boolean,
        default: true
      },
      autoPlay: {//是否自动轮播
        type: Boolean,
        default: true
      },
      interval: {//轮播时间间隔
        type: Number,
        default: 4000
      },
      isShowDots:{
        type: Boolean,
        default:true
      },
      isAddClass:{
        type:Boolean,
        default:true
      }
    },
    mounted() {
      setTimeout(() => {
        this.setSliderWidth() //设置slider宽度
        this.initDots()//初始化dots
        this.initSlider()//使用better-scroll初始化slider
        if (this.loop){
          this.play()//实现自动轮播
        }
      }, 20)

      //用户切换屏幕大小，重新设置宽度
      window.addEventListener("resize",() =>{
        this.setSliderWidth(true)
        this.slider.refresh()
      })
    },
    //保证dom渲染成功，加个定时器
    methods: {
      //设置外部包裹区域宽度---slider-group
      setSliderWidth(isResize) {
        //获取列表种所有元素
        this.children = this.$refs.sliderGroup.children
        //外部包裹区宽度
        let width = 0
        //获取slider宽度 实际上就是一个child的宽度
        let sliderWidth = this.$refs.slider.clientWidth
        //遍历所有的children
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          //为每一个child添加--slider-item
          addClass(child, "slider-item")
          //设置每个child的宽度 为父容器的宽度
          child.style.width = sliderWidth + "px"
          //外部包裹区宽度累加
          width += sliderWidth
        }
        //判断是否开启了循环轮播
        if (this.loop && !isResize) {
          //开启循环轮播，需要克隆第一个和最后一个的dom，所以宽度也要多加两个dom的宽度
          width = width + 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + "px"
      },
      initDots() {
        this.dots = new Array(this.children.length)
      },
      initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,//无惯性
          snap: {
            loop: true,
            Threshold: 0.3,
            speed: 400
          }
        })
        //这行代码是为了防止用户一直拖着轮播图不放，轮播图还自动轮播
        this.slider.on("scrollStart", () => {
          clearInterval(this.timer)
        })
        //实现原点active同步：为slider绑定事件，当滑动结束时触发
        this.slider.on("scrollEnd", () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          this.currentIndex = pageIndex
          //用户手动滑动时,暂时使自动轮播失效
          if (this.autoPlay){
            clearInterval(this.timer)
            this.play()
          }
        })
      },
      play() {
        //设置一个定时器。每隔一段事件
         this.timer = setInterval(() => {
          this.currentIndex++
          if (this.currentIndex >= this.children.length-2){
            this.currentIndex = 0
          }
            this.slider.goToPage(this.currentIndex,0,400)
        }, this.interval)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slider
    position relative
    min-height: 1px
    overflow hidden

    .slider-group
      white-space: nowrap

      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center

        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none

        img
          display: block
          width: 100%

    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0

      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l

        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
