<template>
  <div class="vh-100">
    <div class="d-flex h-100">
      <div class="col-8 h-100 bg-primary">Design Concept</div>
      <div class="col-4 h-100">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style></style>
