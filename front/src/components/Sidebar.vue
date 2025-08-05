<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" class="brand-link">
      <img
        src="#"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">A</span>
    </a>
    <div class="sidebar">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="nav-icon fas fa-home"></i>
              <p>Inicio</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/usuarios" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>Usuarios</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/niveles" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>Niveles</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/grados" class="nav-link">
              <i class="nav-icon fas fa-sort-numeric-up"></i>
              <p>Grados</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cursos" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>Cursos</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profesores" class="nav-link">
              <i class="nav-icon fas fa-user-tie"></i>
              <p>Profesores</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/estudiantes" class="nav-link">
              <i class="nav-icon fas fa-user-graduate"></i>
              <p>Estudiantes</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/apoderados" class="nav-link">
              <i class="nav-icon fas fa-user-friends"></i>
              <p>Apoderados</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/asistencias" class="nav-link">
              <i class="nav-icon fas fa-clipboard-list"></i>
              <p>Asistencias</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reportes" class="nav-link">
              <i class="nav-icon far fa-chart-bar"></i>
              <p>Reportes</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.main-sidebar {
  background: linear-gradient(135deg, #013ba5 0%, #46b5ff 100%);
}
</style>
