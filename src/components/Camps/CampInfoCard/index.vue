<template>
  <camp-card @click="onClick" class="camp-info-card">
    <i class="el-icon-close" @click.stop="onClose"></i>
    <h1 class="card__title">{{this.name}}</h1>
    <p class="card__description">{{this.description}}</p>
    <footer class="card__footer">
      <span class="card__open-date">
        <time>{{this.date}}</time>
        开营
      </span>
    </footer>
  </camp-card>
</template>

<script>
  import CampCard from '../CampCard';
  import {formatDate} from '@/utils'

  export default {
    name: 'AddCampCard',
    props: {
      "id": {
        type: [String, Number],
        required: true
      },
      "name": {
        type: String,
        required: true
      },
      "description": {
        type: String,
      },
      "openDate": {
        type: Number,
        required: true
      }
    },
    computed: {
      date() {
        return formatDate(this.openDate)
      }
    },
    methods: {
      onClick() {
        this.$emit('click', this.id)
      },
      onClose() {
        this.$emit('close', this.id);
      },
    },

    components: {
      'camp-card': CampCard
    }
  }
</script>

<style lang="scss">
  @import "../../../style/variable";
  @import "../../../style/functions";

  .camp-info-card {
    margin: rem(15) rem(20);
    padding: rem(20) rem(35) rem(20) rem(30);
    position: relative;
    overflow: hidden;

    .card__title {
      margin: 0;
      font-size: rem(18);
      color: $primary-color;
    }

    .card__description,
    .card__footer {
      font-size: rem(14);
      color: #686868;
    }

    .card__description {
      margin: rem(25) 0 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      /*max-height: 80px;*/
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    .card__footer {
      position: absolute;
      bottom: rem(20px);
    }

    .el-icon-close {
      position: absolute;
      padding: 10px;
      top: 0;
      right: 0;
    }
  }
</style>
