<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"></a>
      </div>

      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                v-model="email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
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
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" v-model="remember" />
                  <label for="remember">Remember Me</label>
                </div>
              </div>
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../../public/dist/img/fondo_login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-body {
  width: 170%;
  height: 250%;
  border-radius: 200%;
}
</style>
