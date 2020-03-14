<template>
  <Layout class="wrapper">
    <div class="type">
      <div class="unarmed">徒手</div>
      <div class="instrument">器械</div>
    </div>
    <div class="content-inner">
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
      <p>asd</p>
    </div>
  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'Training',
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
.wrapper{
  .type{
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    .unarmed{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      background-color: $color-theme;
      height: 100%;
    }
    .instrument{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
    }
  }
}
</style>