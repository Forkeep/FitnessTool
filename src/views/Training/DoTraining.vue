<template>
  <LayoutTop title="俯卧撑">
    <div class="training-info">
      <div class="group">
        组数
        <span>{{this.group}}</span>
      </div>
      <div class="weight">重量
        <span>{{this.weight}}</span>
      </div>
      <div class="times">次数
        <span>{{this.times}}</span>
      </div>
    </div>
    <div class="start-btn">
      <span>开始</span>
    </div>
    <div class="time-show">{{time}}</div>
  </LayoutTop>
</template>

<script lang="ts">
  export default {
    name: 'DoTraining',
    data() {
      return {
        group: 0,
        weight: 0,
        times: 0,
        time:'00:00'

      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .training-info {
    padding-top: 20px;
    min-width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .start-btn {
    background-color: $color-theme;
    margin-top: 20vh;
    border-radius: 50%;
    @extend %outerShadow;
    width: 20vh;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
  .time-show{
    padding-top: 30px;

  }

</style>