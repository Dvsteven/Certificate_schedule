<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Usuarios
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" @click="showModal = true">
              <v-icon left>add</v-icon>
              Nuevo Registro
            </v-btn>
            <v-data-table
              :headers="headers"
              :items="users"
              item-key="email"
              class="elevation-1"
            >
              <template v-slot:item.estado="{ item }">
                <span :class="item.estado === 'Activo' ? 'green--text' : 'red--text'">{{ item.estado }}</span>
              </template>
              <template v-slot:item.acciones="{ item, index }">
                <v-btn color="blue darken-1" small @click="editarUsuario(item)">Editar</v-btn>
                <v-btn color="red darken-1" small @click="eliminarUsuario(index)">Eliminar</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Modal para agregar usuario -->
    <UserModal :show="showModal" @close="showModal = false" @add-user="agregarUsuario" />
  </v-container>
</template>

<script>
import UserModal from '../../components/UserModal.vue';

export default {
  components: {
    UserModal
  },
  data() {
    return {
      showModal: false,
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Correo Electrónico', value: 'email' },
        { text: 'Área', value: 'area' },
        { text: 'Licencia', value: 'licencia' },
        { text: 'Certificado', value: 'certificado' },
        { text: 'Estado', value: 'estado' },
        { text: 'Acciones', value: 'acciones', sortable: false }
      ],
      users: []
    };
  },
  mounted() {
    this.loadUsers();
    this.$root.$on('user-added', this.agregarUsuario);
  },
  beforeDestroy() {
    this.$root.$off('user-added', this.agregarUsuario);
  },
  methods: {
    loadUsers() {
      this.users = JSON.parse(localStorage.getItem('users')) || [];
    },
    guardarUsuarios() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    agregarUsuario(newUser) {
      this.users.push(newUser);
      this.guardarUsuarios();
    },
    eliminarUsuario(index) {
      this.users[index].estado = 'Inactivo';
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