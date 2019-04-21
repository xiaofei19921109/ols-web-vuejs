<template>
  <div class="root">
    <h3 class="name">{{mission.name}}</h3>
    <div class="description">{{mission.description}}</div>
    <div class="date">{{date}}创建</div>
  </div>
</template>

<style src="./MissionTicket.css" scoped />

<script>
  import { formatDate } from '../../utils';

  export default {
    name: 'MissionTicket',

    props: {
      mission: Object,
    },
    computed: {
      date() {
        return formatDate(this.mission.createdAt);
      },
    },
  }
</script>
