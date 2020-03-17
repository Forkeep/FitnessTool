<template>
  <Layout>
<div class="topBar">
  <span class="title">校健APP</span>
  <div class="topBar-wrapper">
    <div class="calendar">
      <label>
        <input type="month" :value="this.date">
      </label>
    </div>
    <div class="cost">消耗
      <span>10000kCal</span>
    </div>
    <div class="sameAs">相当于
      <span>20个汉堡</span>
    </div>

  </div>
</div>
    <div class="content">
      <div>
        <div>
          <span>昨天 星期五</span>
          <span>消耗3000kcal</span>
        </div>
        <hr>
        <div>
          <span>动作名称</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';


  @Component
  export default class Record extends Vue {
    date = '';

    getToday(): void {
      const today = new Date();
      const month = today.getMonth() > 10 ? (today.getMonth() + 1).toString() : '0' + (today.getMonth() + 1).toString();
      const year = today.getFullYear().toString();
      const date = year + '-' + month;
      console.log(date);
      this.date = date;
    }
    mounted(){
      this.getToday()
    }


  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .topBar {
    padding: 5px 0;
    background-color: $color-theme;

    .title {
      color: $color-black;
      font-size: 24px;
    }

    .topBar-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;

        &:nth-child(1) {
          @extend %outerShadow;
        }
      }

      .cost, .sameAs {
        font-size: 12px;
        color: $color-gray;

        > span {
          color: $color-black;
          font-size: 16px;
        }
      }
    }

  }

</style>