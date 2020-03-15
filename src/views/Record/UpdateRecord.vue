<template>
  <LayoutTop title="修改记录">
    <ul class="update">
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
    name: 'UpdateRecord'
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .update{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    min-width: 100%;
    padding:20px 10px;
    >li{
      min-width: 100%;
      min-height: 40px;
      display: flex;
      justify-content: start;
      align-items: center;
      input{
        padding-left: 20px;
        &::placeholder{
          color: $color-gray;
          font-size: 14px;
        }
      }

    }
  }
</style>