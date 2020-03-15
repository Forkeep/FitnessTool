<template>
  <LayoutTop title="添加动作">
    <ul class="add-action">
      <li>类型
        <label>
          <input placeholder="徒手/器械"/>
        </label>
      </li>
      <li>部位
        <label> <input placeholder="胸/肩/背/腿/腹/有氧"/>
        </label>
      </li>
      <li>名称
        <label>
          <input placeholder="输入名称"/>
        </label>
      </li>
      <li>重量

      </li>
      <li>次数</li>
      <li>备注</li>
    </ul>
  </LayoutTop>
</template>

<script lang="ts">
  export default {
    name: 'AddAction'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .add-action {
    padding-top: 20px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    > li {
      min-width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      padding-left: 20px;
      height: 8vh;

       input {
        padding-left: 20px;
        &::placeholder{
          font-size: 14px;
          color: $color-gray;
        }
        &:focus::placeholder {
          color: transparent;
        }
      }
    }
  }
</style>