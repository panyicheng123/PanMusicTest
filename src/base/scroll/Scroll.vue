<template>
  <div class="wrap" ref="wrap">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props:{
      click:{
        type:Boolean,
        default:true
      },
      probeType:{
        type: Number,
        default: 3
      },
      scrollX:{
        type:Boolean,
        default:false
      },
      scrollY:{
        type:Boolean,
        default:false
      },
      data:{
        type:Object,
        default:null
      },
      refreshDelay:{
        type:Number,
        default:20
      }
    },
    methods:{
      _initScroll(){
        this.scroll = new BScroll(this.$refs.wrap,{
          click: this.click,
          probeType: this.probeType,
          scrollX: this.scrollX,
          scrollY: this.scrollY
        })
      },
      refresh(){
        this.scroll && this.scroll.refresh();
      }
    },
    mounted() {
      this._initScroll()
    },
    watch:{
      data(){
        setTimeout(() => {
          this.refresh()
        },this.refreshDelay)
      }
    }
  }
</script>

<style scoped>

</style>
