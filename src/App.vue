<template>
  <div id="app">
    <header v-if="isLogin"></header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLogin(){
      return false;
    }
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
  font-size: 12px;
}
body {
  /*TODO: 800?*/
  min-width: 1100px;
  margin: 0;
  font-size: 14px;
}
* {
  outline: none;
}
</style>
