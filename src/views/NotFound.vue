<template>
  <div class="wrapper">
    <Icon  class="icon"   name="404"/>

    <span class="decoration">
        抱歉...此页面未找到
      </span>

    <router-link  to="/" class="back-button">
      返回首页
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NotFound'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
.wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon{
    width: 8em;
    height: 8em;
    color: $color-theme;
  }
  .decoration{
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
  }
  .back-button{
    color: $color-theme;
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>