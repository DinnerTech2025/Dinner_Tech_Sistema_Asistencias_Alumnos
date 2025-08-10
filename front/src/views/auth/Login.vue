<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card">
        <div class="login-logo text-center">
          <a href="#">
            <img
              src="../../../public/dist/img/logotipo_dinner_tech.png"
              alt="Logo"
              class="logo-img"
            />
          </a>
        </div>
        <div class="card-body login-card-body">
          <h2 class="text-center fw-bold"><strong>Bienvenido</strong></h2>
          <p class="login-box-msg">Ingresa tus Credenciales</p>

          <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Usuario"
                v-model="username"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>

            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>

            <div class="row">
              <router-link
                to="/"
                type="submit"
                class="btn btn-gradient btn-block"
              >
                <i class="fas fa-sign-in-alt"></i>
                Iniciar Sesión
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

function onSubmit() {
  console.log("LOGIN:", {
    email: email.value,
    password: password.value,
    remember: remember.value,
  });
}
</script>

<style>
@import "/plugins/fontawesome-free/css/all.min.css";
@import "/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
@import "/dist/css/adminlte.min.css";

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../../public/dist/img/fondo_login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card {
  border-radius: 1rem !important;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
  overflow: hidden;
  padding: 8%;
}

.logo-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(6, 3, 3, 0.2);
  margin-bottom: 0.5rem;
}

.btn-gradient {
  background: linear-gradient(45deg, #007bff, #00c6ff);
  color: white;
  border: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(45deg, #0056b3, #0099cc);
  color: white;
}
</style>
