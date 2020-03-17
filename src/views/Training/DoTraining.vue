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
    <div class="start-btn" :class="this.status==='完成' && 'doing'" @click="start">
      <span>{{this.status}}</span>
    </div>
    <div class="time-show">{{time}}</div>
  </LayoutTop>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class DoTraining extends Vue {
    group = 0;
    weight = 0;
    times = 0;
    status = '开始';
    time = '00:00';
    flag = false;
    begin: Date | undefined;
    end: Date | undefined;
    toggleBtnTime: Date | undefined;

    beforeDestroy() {
      this.end = new Date();
      if (this.begin) {
        const sustain = ((this.end.valueOf() - this.begin.valueOf()) / 60000).toFixed(2);
        console.log(sustain);
      }
    }

    @Watch('group', {immediate: true})
    onGroupChange() {
      return;
    }

    start() {
      if (!this.begin) {
        this.begin = new Date();
        console.log(`开始训练了${this.begin}`);
        this.status = '完成';
      }
      if (this.flag) {
        this.flag = !this.flag;
        this.group += 1;
        this.status = '开始';
      } else {
        this.flag = !this.flag;
        this.status = '完成';
      }


    }
  }
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
    margin-top: 20vh;
    border-radius: 50%;
    @extend %outerShadow;
    width: 20vh;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    transition: all 1s;
    color: black;
    background-color: lighten($color-gray, 30%);
  }

  .start-btn.doing {
    background-color: $color-theme;
    color: white;
    @extend %outerShadow;
    @extend %innerShadow;
  }

  .time-show {
    padding-top: 30px;

  }

</style>