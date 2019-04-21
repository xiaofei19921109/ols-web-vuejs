<template>
  <div class="root">
    <div class="avatar" :style="{backgroundImage: profile}"/>
    <div class="name">{{student.name}}</div>
    <div class="email">{{student.email}}</div>
    <div class="score">{{student.score}}</div>
  </div>
</template>

<style src="./StudentItem.css" scoped />

<script>
  export default {
    name: 'StudentItem',

    props: {
      student: Object,
    },

    computed: {
      profile() {
        return `url(${this.student.avatar})`;
      },
    },
  }
</script>
