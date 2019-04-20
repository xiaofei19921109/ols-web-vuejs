<template>
  <form class="root">
    <router-link class="back" :to="{ path: '/camps' }">返回</router-link>
    <h1 class="header">创建训练营</h1>
    <div class="form-row">
      <label for="name" class="form-label">标题</label>
      <input type="text" id="name" maxlength="140" v-model="form.name">
    </div>
    <div class="form-row">
      <label for="description" class="form-label">描述</label>
      <textarea type="text" id="description" maxlength="300" v-model="form.description" />
    </div>
    <div class="form-row form-actions">
      <router-link :to="{ path: '/camps' }">
        <button class="button-secondary">取消</button>
      </router-link>
      <button class="button-primary" @click="submit">保存</button>
    </div>
  </form>
</template>

<style src="./CampCreate.css" scoped />

<script>
  import api from '@/api';

  export default {
    data() {
      return {
        form: {
          name: '',
          description: '',
        },
      }
    },
    methods: {
      submit() {
        const { name, description } = this.form;
        if (!name.length || !description.length) {
          return;
        }
        api.createCamp(this.form).then(() => {
          this.$router.push({ path: '/camps' });
        });
      },
    }
  }
</script>
