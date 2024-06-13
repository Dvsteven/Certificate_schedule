<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Usuarios
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(user, index) in users" :key="index" cols="12" md="6" lg="4">
                <v-card class="pa-3 mb-4">
                  <v-card-title>{{ user.nombre }} {{ user.apellido }}</v-card-title>
                  <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                  <v-card-subtitle>{{ user.area }}</v-card-subtitle>
                  <v-card-subtitle>{{ user.licencia }}</v-card-subtitle>
                  <v-card-subtitle>{{ user.certificado }}</v-card-subtitle>
                  <v-card-subtitle :class="user.estado === 'Activo' ? 'green--text' : 'red--text'">{{ user.estado }}</v-card-subtitle>
                  <v-row class="mt-4">
                    <v-col cols="6">
                      <v-btn color="blue darken-1" dark @click="editarUsuario(user)">Editar</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn color="red darken-1" dark @click="eliminarUsuario(index)">Eliminar</v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    // Cargar usuarios desde localStorage al montar el componente
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      this.users = JSON.parse(localStorage.getItem('users')) || [];
    },
    guardarUsuarios() {
      // Guardar usuarios en localStorage
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    agregarUsuario(newUser) {
      this.users.push(newUser);
      this.guardarUsuarios();
    },
    editarUsuario(index, editedUser) {
      this.users.splice(index, 1, editedUser);
      this.guardarUsuarios();
    },
    eliminarUsuario(index) {
      this.users.splice(index, 1);
      this.guardarUsuarios();
    }
  }
};
</script>


<style scoped>
.green--text {
  color: green;
}
.red--text {
  color: red;
}
</style>