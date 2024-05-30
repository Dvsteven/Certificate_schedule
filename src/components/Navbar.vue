<template>
   <nav>
    <!--Colores navbar-->
       <v-app-bar  color="#00457C" dark app >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase ">
               <span class="font-weight-light">Abai</span>
               <span> Group</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-menu offset-y>
            <!--Barra de expansion-->
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on">
          <v-icon left>expand_more</v-icon>
            <span>Menu</span>
        </v-btn>
      </template>
      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-title >{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
          </v-menu>
          <v-btn text @click="goToLogin">
            <span>Exit</span>
            <v-icon right>exit_to_app</v-icon>
          </v-btn>
       </v-app-bar>
       <!--Color de columna principal-->
      <v-navigation-drawer  v-model="drawer" dark app class="blue darken-4">
          <v-layout column align-center>
               <v-flex class="mt-5"> 
                    <v-avatar size="100">
                            <img src="/img1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Usuario</p> <!---Ubicar de forma dinamica el nombre del usuario en sesion-->
               </v-flex>
               <v-flex class="mt-4 mb-4">
                <Popup />
               </v-flex>
          </v-layout>
          <v-list flat>
              <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
                  <v-list-item-action>
                     <v-icon >{{link.icon}}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content >
                      <v-list-item-title >{{link.text}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
import Popup from './Popup.vue'
export default {
   data: () => ({
      drawer: true,
      links :[
          {icon: 'dashboard', text:'Panel principal', route: '/dashboard'},
          {icon: 'event', text:'Agenda General', route: '/agenda'},
          {icon: 'mail', text:'Enviar correo', route: '/email'},
          {icon: 'search', text:'Visualizar vigencias', route: '/vigency'},
          {icon: 'folder', text:'Productos', route: '/projects'},
      ]
     
    }),
    components: {
    Popup
  },

  methods: {
    goToLogin() {
      // Redirigir al usuario a la página de inicio de sesión
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>
<style scoped>
.border {
  border-left: 4px solid #0ba518;
}
</style>