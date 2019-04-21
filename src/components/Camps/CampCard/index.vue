<template>
  <div class="camp-card" @click="onClick">
    <slot></slot>
  </div>
</template>


<script>
  export default {
    name: 'CampAddCard',
    methods: {
      onClick() {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../style/variable";
  @import "../../../style/functions";

  .camp-card {
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px 0 #00b4c5;
    }
  }
</style>
