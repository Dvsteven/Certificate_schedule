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
            <p class="white--text subheading mt-1 text-center" v-if="!miniVariant">Administrador</p>
          </v-flex>
          <v-flex class="mt-4 mb-4">
            <!-- Botón para mostrar el modal de Registrar Licencias -->
            <v-btn block color="primary" @click="showLicensesModal = true" :class="{ 'mini-button': miniVariant }">
              <v-icon left>mdi-license</v-icon>
              <span v-if="!miniVariant">Registrar licencias</span>
            </v-btn>
            <!-- Botón para mostrar el modal de Registrar Certificados -->
            <v-btn block color="primary" @click="showCertificatesModal = true" :class="{ 'mini-button': miniVariant }">
              <v-icon left>mdi-certificate</v-icon>
              <span v-if="!miniVariant">Registrar certificados</span>
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

    <!-- Modal para Registrar Licencias -->
    <LicenseModal :show="showLicensesModal" @close="showLicensesModal = false" @add-license="addLicense" />

    <!-- Modal para Registrar Certificados -->
    <CertificateModal :show="showCertificatesModal" @close="showCertificatesModal = false" @add-certificate="addCertificate" />
  </div>
</template>


<script>
import LicenseModal from '@/components/Modals/LicenseModal.vue';
import CertificateModal from '@/components/Modals/CertificateModal.vue';

export default {
  components: {
    LicenseModal,
    CertificateModal
  },
  data() {
    return {
      drawer: true,
      miniVariant: false,
      showLicensesModal: false,
      showCertificatesModal: false,
      licenses: [], // Estructura para almacenar las licencias
      certificates: [], // Estructura para almacenar los certificados
      links: [
        { icon: 'mdi-account', text: 'Usuarios', route: '/viewsAdmin/usuarios' },
        { icon: 'mdi-file-chart', text: 'Reportes', route: '/viewsAdmin/reportes' },
        { icon: 'mdi-calendar', text: 'Agenda de eventos', route: '/viewsAdmin/AgendaAdmin' },
        { icon: 'mdi-license', text: 'Lista de Licencias', route: '/viewsAdmin/licencias' },
        { icon: 'mdi-certificate', text: 'Lista de certificados', route: '/viewsAdmin/certificados' }
      ],
    };
  },
  created() {
    // Escuchar el evento de nueva licencia y nuevo certificado
    this.$root.$on('add-license', this.addLicense);
    this.$root.$on('add-certificate', this.addCertificate);
  },
  mounted() {
    // Cargar licencias y certificados desde localStorage al montar el componente
    this.loadLicenses();
    this.loadCertificates();

    // Añadir listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // Llamar inmediatamente para ajustar según el tamaño inicial
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
    toggleDrawer() {
      this.miniVariant = !this.miniVariant;
    },
    loadLicenses() {
      this.licenses = JSON.parse(localStorage.getItem('allLicenses')) || [];
    },
    saveLicenses() {
      localStorage.setItem('allLicenses', JSON.stringify(this.licenses));
    },
    addLicense(newLicense) {
      this.licenses.push(newLicense);
      this.saveLicenses();
    },
    loadCertificates() {
      this.certificates = JSON.parse(localStorage.getItem('allCertificates')) || [];
    },
    saveCertificates() {
      localStorage.setItem('allCertificates', JSON.stringify(this.certificates));
    },
    addCertificate(newCertificate) {
      this.certificates.push(newCertificate);
      this.saveCertificates();
    },
    editarPerfil() {
      // Redirigir al usuario a la página de edición de perfil
      this.$router.push({ name: 'EditarPerfil' });
    },
    handleResize() {
    if (window.innerWidth < 600) {
      this.drawer = false; // Minimizar la barra lateral en pantallas pequeñas
    } else {
      this.drawer = true; // Mostrar la barra lateral en pantallas grandes
    }
  },
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
  top: 0;
  right: 0;
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
  margin-bottom: 10px;
}
</style>