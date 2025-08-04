<script setup>
import { onMounted, ref } from "vue";
import { getUsers } from "./../../services/useService";

const users = ref([]);

onMounted(async () => {
  try {
    const response = await getUsers();
    console.log("Respuesta:", response.data);
    users.value = response.data;
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
});
</script>

<template>
  <div>
    <h1>Usuarios:</h1>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <p v-else>No hay usuarios cargados.</p>
  </div>
</template>
