<template>
  <div class="panel">
    <header class="panel-header">
      <h2>NHO Camps</h2>
    </header>
    <router-view/>
  </div>
</template>

<style>
.panel {
  height: 100vh;
  overflow: auto;
  background-color: rgba(255,255,255,0.95);
}
.panel-header {
  padding: 1px 20px;
  background-color: rgba(96, 125, 139, 0.95);
  color: #fff;
}
</style>
