<template>
  <div id="app">
    <camp-header v-if="isLogin">
    </camp-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  computed: {
    isLogin(){
      return true;
    }
  },
  components: {
    'camp-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  font-size: 14px;
}
body {
  min-width: 1100px;
  margin: 0;
  font-size: 14px;
}
* {
  outline: none;
}
</style>
