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
            <!-- Botón para mostrar el modal de Registrar Licencias -->
            <v-btn block color="primary" @click="showLicensesModal = true" :class="{ 'mini-button': miniVariant }">
              <v-icon left>mdi-plus</v-icon>
              <span v-if="!miniVariant">Registrar licencias</span>
            </v-btn>
            <!-- Botón para mostrar el modal de Registrar Certificados -->
            <v-btn block color="primary" @click="showCertificatesModal = true" :class="{ 'mini-button': miniVariant }">
              <v-icon left>mdi-plus</v-icon>
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

          <!-- Submenú de Licencias -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-license</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-if="!miniVariant">Licencias</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="category in licenseCategories" :key="category.text" @click="navigateToCategory('Licencias', category.route)">
              <v-list-item-content>
                <v-list-item-title>{{ category.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <!-- Submenú de Certificados -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-certificate</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-if="!miniVariant">Certificados</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="category in certificateCategories" :key="category.text" @click="navigateToCategory('Certificados', category.route)">
              <v-list-item-content>
                <v-list-item-title>{{ category.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

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
import LicenseModal from '@/components/LicenseModal.vue';
import CertificateModal from '@/components/CertificateModal.vue';


export default {
  components: {
    LicenseModal,
    CertificateModal
  },
  data: () => ({
    drawer: true,
    miniVariant: false,
    showLicensesModal: false,
    showCertificatesModal: false,
    links: [
      { icon: 'mdi-account', text: 'Usuarios', route: '/viewsAdmin/usuarios' },
      { icon: 'mdi-file-chart', text: 'Reportes', route: '/viewsAdmin/reportes' },
      { icon: 'mdi-calendar', text: 'Agenda de eventos', route: '/viewsAdmin/agenda' },
    ],
    licenseCategories: [
      { text: 'Windows', route: '/viewsAdmin/licencias/windows' },
      { text: 'Office', route: '/viewsAdmin/licencias/office' },
      { text: 'APPA', route: '/viewsAdmin/licencias/appa' }
    ],
    certificateCategories: [
      { text: 'Certificados de Seguridad', route: '/viewsAdmin/certificados/seguridad' },
      { text: 'Certificados de Calidad', route: '/viewsAdmin/certificados/calidad' },
      { text: 'Certificados de Cumplimiento', route: '/viewsAdmin/certificados/cumplimiento' }
    ]
  }),
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
    toggleDrawer() {
      this.miniVariant = !this.miniVariant;
    },
    navigateToCategory(type, route) {
      this.$router.push(route);
    },
    openLicensesModal() {
      this.showLicensesModal = true;
    },
    openCertificatesModal() {
      this.showCertificatesModal = true;
    }
  }
};
</script>

<style scoped>
.avatar {
  transition: width 0.3s, height 0.3s;
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