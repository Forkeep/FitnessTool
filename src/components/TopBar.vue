<template>
  <div class="top-bar">
    <router-link to="" @click="$router.back(-1)">
      <icon name="取消" class="cancel icon" @click="$router.back(-1)"/>
    </router-link>
    <div class="item-name">
      <slot>--页面内容名称--</slot>
    </div>
    <router-link to="">
      <icon name="确认" class="affirm icon" @click="$router.back(-1)"/>
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TopBar'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .top-bar {
    @extend %outerShadow;
    background-color: $color-theme;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 80px;
    .icon {
      width: 1.5em;
      height: 1.5em;
    }
    .item-name {
      font-size: 24px;
      text-align: center;

    }
  }
</style>