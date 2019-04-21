<template>
  <camp-card @click="onClick" class="add-camp-card">
    <img src="./img/2.png"
         srcset="./img/2@2x.png 2x,
             ./img/2@3x.png 3x"
         class="card__image"
         alt="add camp"
    >
    <h1 class="card__title">创建训练营</h1>
  </camp-card>
</template>

<script>
  import CampCard from '../CampCard';

  export default {
    name: 'AddCampCard',
    methods: {
      onClick() {
        this.$emit('click');
      }
    },
    components: {
      'camp-card': CampCard
    }
  }
</script>

<style lang="scss">

  @import "../../../style/variable";
  @import "../../../style/functions";

  .add-camp-card {
    margin: rem(15) rem(20);
    padding: rem(50) 0 rem(40);
    text-align: center;

    .card__title {
      margin: rem(15) 0 0 0;
      font-size: rem(18);
      color: $primary-color;
    }
  }

</style>
