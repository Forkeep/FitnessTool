<template>
  <Layout class="wrapper">
    <div class="type">
      <div class="unarmed">徒手</div>
      <div class="instrument">器械</div>
    </div>
    <ul class="body-parts">
      <li>胸</li>
      <li>背</li>
      <li>腿</li>
      <li>肩</li>
      <li>手臂</li>
      <li>腹肌</li>
      <li>有氧</li>
    </ul>
    <ul class="practice-items">
      <li><span>平板卧推</span>
        <icon name="进入"/>
      </li>
      <li><span>上斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>下斜卧推</span>
        <icon name="进入"/>

      </li>
      <li><span>龙门架假胸</span>
        <icon name="进入"/>
      </li>

    </ul>
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
  .type {
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;

    .unarmed {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      background-color: $color-theme;
      height: 100%;
    }

    .instrument {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
    }


  }

  .body-parts {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    >li {
      @extend %outerShadow;
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #EEE;
    }
  }
  .practice-items{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    padding: 0 10px;
    margin-top: 30px;
    >li{
      @extend %outerShadow;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>