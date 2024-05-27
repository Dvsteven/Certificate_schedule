<template>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Ejemplo:
        if (this.username === 'usuario' && this.password === 'contraseña') {
          localStorage.setItem('isLoggedIn', true);
          this.$router.push({ name: 'dashboard' });
        } else {
          // Manejar caso de credenciales incorrectas
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      }
    }
  };
  </script>
  