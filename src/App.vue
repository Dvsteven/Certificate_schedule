<template>
  <v-app>
    <template v-if="$route.name !== 'Login'">
      <component :is="navbarComponent" />
      <v-content class="ma-4">
        <router-view></router-view>
      </v-content>
      <component :is="footerComponent" />
    </template>
    <router-view v-else></router-view>
  </v-app>
</template>

<script>
import NavbarUser from './components/NavbarUser.vue';
import NavbarAdmin from './components/NavbarAdmin.vue';
import FooterUser from './components/FooterUser.vue';
import FooterAdmin from './components/FooterAdmin.vue';

export default {
  components: {
    NavbarUser,
    NavbarAdmin,
    FooterUser,
    FooterAdmin
  },
  data() {
    return {
      userType: localStorage.getItem('userType')
    };
  },
  computed: {
    navbarComponent() {
      return this.userType === 'admin' ? 'NavbarAdmin' : 'NavbarUser';
    },
    footerComponent() {
      return this.userType === 'admin' ? 'FooterAdmin' : 'FooterUser';
    }
  },
  watch: {
    '$route'() {
      this.updateUserType();
    }
  },
  methods: {
    updateUserType() {
      this.userType = localStorage.getItem('userType');
    }
  },
  mounted() {
    window.addEventListener('storage', this.updateUserType);
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.updateUserType);
  }
};
</script>