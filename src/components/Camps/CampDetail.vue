<template>
  <div class="camp-detail">
    <router-link class="back" :to="{ path: '/camps' }">返回</router-link>
    <h1 class="header">{{camp.name}}</h1>
    <div class="main">
      <div>
        <p class="description">{{camp.description}}</p>
        <div class="mission-list">
          <mission-ticket
            v-for="(mission, index) in missions"
            :key="index"
            :mission="mission"
            class="mission-ticket"
          />
        </div>
      </div>
      <div class="student-list">
        <student-item
          v-for="(student, index) in students"
          :key="index"
          :student="student"
          class="student-item"
        />
      </div>
    </div>
  </div>
</template>

<style src="./CampDetail.css" scoped />

<script>
  import api from '@/api';
  import StudentItem from './StudentItem';
  import MissionTicket from './MissionTicket';

  export default {
    name: 'CampDetail',

    components: {
      StudentItem,
      MissionTicket,
    },

    data() {
      return {
        camp: {
          name: '',
          description: '',
        },
        missions: [],
        students: [],
      }
    },

    mounted() {
      api.getCamp(this.$route.params.id).then(({ camp, missions, students }) => {
        this.camp = camp;
        this.missions = missions;
        this.students = students;
      });
    },
  }
</script>
