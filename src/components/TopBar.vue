<template>
  <div class="wrapper">
    <Icon class="icon" name="退出"/>
    <div class="item-name">
      <slot>--页面内容名称--</slot>
    </div>
    <button class="success">完成</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TopBar'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .wrapper {
    @extend %outerShadow;
    background-color: $color-theme;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 80px;

    .icon {
      width: 1.2em;
      height: 1.2em;
      margin-right: 15px;
    }
    .item-name{
      font-size: 24px;
      text-align: center;

    }

    .success {
      border: none;
      color: inherit;
      font-size: 18px;
      background-color: inherit;
      font-family: inherit;
    }

  }
</style>