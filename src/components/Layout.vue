<template>
  <div class="wrapper">
    <div class="content">
      <slot>
        --插槽位置--
      </slot>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  .content-inner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    overflow: auto;

  }

}
</style>