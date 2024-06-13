<template>
  <div>
    <!-- Menú superior -->
    <v-app-bar app color="#00457C" dark>
      <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Abai</span>
        <span> Group</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToLogin">
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Barra lateral -->
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="blue darken-4"
      :mini-variant="miniVariant"
      :clipped="$vuetify.breakpoint.smAndDown"
      :temporary="$vuetify.breakpoint.smAndDown"
    >
      <v-responsive>
        <v-layout column align-center>
          <v-flex class="mt-5">
            <v-avatar :size="miniVariant ? 50 : 100" class="avatar">
              <img src="../../public/user.jpg" alt="">
            </v-avatar>
            <p class="white--text subheading mt-1 text-center" v-if="!miniVariant">Administrador</p>
          </v-flex>
          <v-flex class="mt-4 mb-4">
            <v-btn color="primary" @click="showModal = true" :class="{ 'mini-button': miniVariant }">
              <v-icon left>add</v-icon>
              <span v-if="!miniVariant">Nuevo Usuario</span>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-if="!miniVariant">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-responsive>
    </v-navigation-drawer>
    <!-- Modal para agregar usuario -->
    <UserModal :show="showModal" @close="showModal = false" @add-user="addUser" />
  </div>
</template>

<script>
import UserModal from '@/components/UserModal.vue';

export default {
  components: {
    UserModal
  },
  data: () => ({
    drawer: true,
    miniVariant: false,
    showModal: false,
    users: JSON.parse(localStorage.getItem('users')) || [], // Obtener la lista de usuarios de localStorage
    links: [
      { icon: 'mdi-account', text: 'Usuarios', route: '/viewsAdmin/usuarios' },
      { icon: 'mdi-license', text: 'Licencias', route: '/licencias' },
      { icon: 'mdi-certificate', text: 'Certificados', route: '/certificados' },
      { icon: 'mdi-file-chart', text: 'Reportes', route: '/reportes' },
      { icon: 'mdi-calendar', text: 'Agenda de eventos', route: '/agenda' },
    ]
  }),
  methods: {
    goToLogin() {
      localStorage.removeItem('isLoggedIn');
      this.$router.push({ name: 'Login' });
    },
    toggleDrawer() {
      this.miniVariant = !this.miniVariant;
    },
    addUser(newUser) {
      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users)); // Guardar usuarios en localStorage
      this.$router.push({ name: 'Usuarios' });
    }
  }
};
</script>

<style scoped>
.linea {
  border-top: 1px solid white;
  margin: 10px 0;
}
.avatar {
  transition: width 0.3s, height 0.3s;
}
.mini-button {
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.mini-button v-icon {
  margin-right: 0;
}
</style>
