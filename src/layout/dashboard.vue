<template>
  <div class="d-flex">
    <div class="sidebar">
      <h3>Sidebar</h3>
      <div>
        <router-link :to="{ name: 'DashboardHome' }">Home</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'DashboardProfile' }">Profile</router-link>
      </div>
    </div>
    <div class="col">
      <div class="header">
        <div class="container"></div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style>
.sidebar {
  width: 250px;
  border-right: 1px solid grey;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
.header {
  height: 50px;
}
</style>
