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
    <div class="start-btn" :class="this.status==='训练中' && 'doing'" @click="start">
      <span>{{this.time}}</span>
    </div>
    <div class="time-show">{{this.status}}</div>
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
    status = '休息中';
    time = 0;
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

    destroyed() {
      clearTimeout(this.restTimer());
    }

    @Watch('group', {immediate: true})
    onGroupChange() {
      return;
    }

    @Watch('time', {immediate: false})
    onTimeChange() {
      this.restTimer();
      if (this.time <= 0) {
        alert('别休息了');
        clearTimeout(this.restTimer());
        return;
      }
    }

    start() {
      if (!this.begin) {
        //刚进入页面第一次按下
        this.begin = new Date();
        console.log(`开始训练了${this.begin}`);
        this.status = '训练中..';
      }
      if (this.flag) {//休息->锻炼
        this.time = 10;
        this.flag = !this.flag;
        this.group += 1;
        this.status = '休息中';

      } else {//锻炼->休息
        this.time = 20;
        this.flag = !this.flag;
        this.status = '训练中';
      }
      // if (this.flag) {
      //   console.log('清空计时器');
      // } else {
      //   this.restTimer();
      // }

    }

    restTimer() {
      return setTimeout(() => {
        this.time -= 1;
      },1000);
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
    transition: all 0.5s;
    color: black;
    background-color: lighten($color-gray, 30%);
  }

  .start-btn.doing {
    background-color: $color-theme;
    @extend %outerShadow;
    @extend %innerShadow;
  }

  .time-show {
    padding-top: 30px;

  }

</style>