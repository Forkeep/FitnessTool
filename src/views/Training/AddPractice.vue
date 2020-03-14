<template>
  <LayoutTop class="wrapper-addPractice" title="添加步数">
    <div class="grow-class"></div>
    <div class="output">100</div>
    <ul class="keyboard">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>del</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li> </li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>确认</li>
      <li>0</li>
      <li>.</li>
      <li>清空</li>
      <li> </li>
    </ul>
  </LayoutTop>
</template>

<script lang="ts">
  export default {
    name: 'AddPractice'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .wrapper-addPractice {
    .grow-class{
      flex-grow: 1;
    }
    .output{
      @extend %innerShadow;
      font-size: 32px;
      height: 54px;
      min-width: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    .keyboard {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      >li{
        border: none;
        float: left;
        width: 25%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        $color-board : #eee;
        &:nth-child(1){
          background-color: $color-board;
        }
        &:nth-child(2),&:nth-child(5){
          background-color: darken($color-board,4%);
        }
        &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background-color: darken($color-board,8%);
        }
        &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
          background-color: darken($color-board,12%);
        }
        &:nth-child(11),&:nth-child(14){
          background-color: darken($color-board,16%);
        }
        &:nth-child(15){
          background-color: darken($color-board,20%);
        }
        &:nth-child(8),&:nth-child(12),&:nth-child(16){
          background-color: darken($color-board,24%);

        }

      }

    }

  }

</style>