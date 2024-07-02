<template>
    <div class="user-dashboard">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" md="8">
            <v-card class="mx-auto my-12" max-width="500">
              <v-card-title class="headline">Bienvenido, {{ user.username }}</v-card-title>
              <v-card-subtitle>Panel de Administración</v-card-subtitle>
              <v-card-text>
                <p>Hola {{ user.username }}, este es tu panel de administración. Aquí puedes gestionar tus licencias, certificados y correspondencia</p>
                <v-divider class="my-3"></v-divider>
                <p><strong>Correo:</strong> {{ user.email }}</p>
                <p><strong>Rol:</strong> Usuario </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: 'Usuario',
          email: 'user@abai-group.com'
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .user-dashboard {
    padding: 20px;
  }
  </style>