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
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text @click="goToLogin">
        <span>Exit</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Barra lateral -->
    <v-navigation-drawer v-model="drawer" app dark class="blue darken-4" :mini-variant="miniVariant" :width="miniVariant ? '56' : '250'">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="../../public/user.jpg" alt="">
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Usuario</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <v-btn color="primary" @click="mostrarModal = true">
            <v-icon left>add</v-icon>
            Nuevo Usuario
          </v-btn>
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="linea"></div>
      <v-list-item @click="toggleDarkMode">
        <v-list-item-action>
          <v-icon>brightness_3</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Modo Oscuro</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="darkMode" @click.stop=""></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    darkMode: false,
    miniVariant: false,
    links: [
          {icon: 'dashboard', text:'Panel principal', route: '/dashboard'},
          {icon: 'event', text:'Agenda General', route: '/agenda'},
          {icon: 'mail', text:'Enviar correo', route: '/email'},
          {icon: 'search', text:'Visualizar vigencias', route: '/vigency'}
    ]
  }),
  methods: {
    goToLogin() {
      // Redirigir al usuario a la página de inicio de sesión
      this.$router.push({ name: 'Login' });
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark-mode', this.darkMode);
    },
    toggleDrawer() {
      // Cambiar el estado de la barra lateral entre expandida y minimizada
      this.miniVariant = !this.miniVariant;
    }
  }
};
</script>

<style scoped>
.linea {
  border-top: 1px solid white;
  margin: 10px 0;
}
</style>