<template>
  <div class="layout-top">
    <div class="topBar">
      <TopBar>{{title}}</TopBar>
    </div>
    <div class="content">
      <slot>--顶部栏布局组件插槽位置--</slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'LayoutTop',
    props:['title']
  };
</script>

<style lang="scss" scoped>
.layout-top{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  .content{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: auto;
  }
}

</style>