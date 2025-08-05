<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li
        class="nav-item dropdown"
        @click="toggleDropdown"
        @blur="closeDropdown"
        tabindex="0"
      >
        <a class="nav-link" href="#">
          <i class="far fa-user"></i>
        </a>
        <div
          class="dropdown-menu dropdown-menu-lg dropdown-menu-right"
          :class="{ show: dropdownOpen }"
        >
          <div class="dropdown-divider"></div>
          <router-link to="/login" class="dropdown-item">
            <i class="fas fa-sign-out-alt mr-2"></i> Cerrar Sesión
          </router-link>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
function closeDropdown() {
  dropdownOpen.value = false;
}
</script>
