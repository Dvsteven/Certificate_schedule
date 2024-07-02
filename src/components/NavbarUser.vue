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
            <v-avatar :size="miniVariant ? 50 : 100" class="avatar" @click="editarPerfil">
              <img src="../../public/user.jpg" alt="">
              <v-icon class="edit-icon" small>mdi-pencil</v-icon>
            </v-avatar>
            <p class="white--text subheading mt-1 text-center" v-if="!miniVariant">Usuario</p>
          </v-flex>
          <v-flex class="mt-4 mb-4">
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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    miniVariant: false,
    links: [
      { icon: 'dashboard', text: 'Panel principal', route: '/UserDashboard' },
      { icon: 'event', text: 'Agenda General', route: '/agenda' },
      { icon: 'mail', text: 'Enviar correo', route: '/email' },
      { icon: 'search', text: 'Visualizar vigencias', route: '/vigency' }
    ]
  }),
  methods: {
    goToLogin() {
      // Redirigir al usuario a la página de inicio de sesión
      this.$router.push({ name: 'Login' });
    },
    toggleDrawer() {
      // Cambiar el estado de la barra lateral entre expandida y minimizada
      this.miniVariant = !this.miniVariant;
    },
    editarPerfil() {
      // Redirigir al usuario a la página de edición de perfil
      this.$router.push({ name: 'EditarPerfil' });
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
  position: relative;
  cursor: pointer;
  transition: width 0.3s, height 0.3s;
}
.avatar:hover .edit-icon {
  opacity: 1;
}
.edit-icon {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  color: white;
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