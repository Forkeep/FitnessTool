<template>
  <div class="content">
    <div class="content-layout">
      <div class="date-week">
        <span>{{this.date}}</span>
        <span>{{this.week}}</span>
      </div>
      <div class="cost-kcal">
        <span>消耗{{this.costEnergy}}kcal</span>
      </div>
    </div>
    <hr>
    <ul class="action-list">
      <router-link class="action-item" to="/updaterecord">动作1</router-link>
      <router-link class="action-item" to="/updaterecord">动作1</router-link>
      <router-link class="action-item" to="/updaterecord">动作1</router-link>
    </ul>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class DayRecord extends Vue {
    @Prop(Date) readonly datetime: Date | undefined;
    @Prop(Number) readonly costEnergy: number | undefined;
    date: string | undefined;

    get week() {
      return this.datetime?.getFullYear();
    }


  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .content {
    /*border: 1px solid red;*/

    display: flex;
    flex-direction: column;

    .content-layout {
      padding: 0 8px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .date-week {
        span {
          padding: 0 5px;
        }
      }
    }

    hr {
      margin: 0 10px;
      @extend %outerShadow;
    }

    .action-list {
      padding: 3px 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: start;

      .action-item {
        display: flex;
        flex-direction: row;
        justify-content: start;
        min-width: 100%;
        /*border: solid blue 1px;*/
      }
    }
  }
</style>