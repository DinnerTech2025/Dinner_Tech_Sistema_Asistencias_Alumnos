<script setup>
import { onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

onMounted(() => {
  if (window.$) {
    window.$('[data-widget="treeview"]').Treeview?.();

    window.$('[data-widget="pushmenu"]').PushMenu?.();
  }
});
</script>

<template>
  <div class="wrapper">
    <Navbar />
    <Sidebar />
    <div class="content-wrapper">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
html,
body,
#app,
.wrapper,
.content-wrapper {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
