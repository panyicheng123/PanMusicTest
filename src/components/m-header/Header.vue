<template>
  <div id="header">
    <img class="logo" src="~components/m-header/logo.svg">
    <h1 class="text">Pan Music</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/variable"
  #header
    height 44px
    text-align center
    line-height 44px
    .text
      display inline-block
      font-size x-large
      font-weight 600
      font-family "Calisto MT"
    .logo
      vertical-align middle
      margin-top -10px
      margin-right 10px
</style>
