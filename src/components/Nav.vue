<template>
  <div class="nav">
    <router-link to="/record" class="item" active-class="selected">
      <Icon class="icon" name="记录"/>
      <span>历史</span>
    </router-link>
    <router-link to="/training" class="item" active-class="selected">
      <Icon class="icon" name="健身房"/>
      <span>训练</span>
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon class="icon" name="统计"/>
      <span>统计</span>
    </router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .nav {
    @extend %outerShadow;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    .selected {
      color: $color-theme;
    }

    .item {
      padding: 3px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        width: 1.5em;
        height: 1.5em;
      }
    }


  }

</style>