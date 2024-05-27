<template>
  <v-app>
    <template v-if="$route.name !== 'Login'">
      <Navbar/>
      <v-content class="ma-4">
        <router-view></router-view>
      </v-content>
      <Footer/>
    </template>
    <router-view v-else></router-view>
  </v-app>
</template> 

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn');
  }
};
</script>