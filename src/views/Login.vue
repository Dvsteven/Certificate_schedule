<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="login-card shadow-lg overflow-hidden rounded-xl" elevation="10">
      <v-row>
        <!-- Contenedor de la imagen -->
        <v-col v-if="!showFormImage" cols="12" md="6" class="image-container">
          <!-- Imagen de fondo -->
          <img src="../../public/card-login-abai.png" alt="">
        </v-col>
        <!-- Contenedor del formulario de login -->
        <v-col cols="12" md="6" class="form-container px-8 py-10">
          <div>
            <b class="headline text-center d-block">Sistema de Agenda</b>
            <p class="text-center">Suministre los datos requeridos para iniciar sesión.</p>
          </div>
          <v-form @submit.prevent="login">
            <v-text-field 
              v-model="username" 
              label="Email" 
              prepend-inner-icon="mdi-account"
              outlined
              dense
              class="mb-4"
            ></v-text-field>
            <v-text-field 
              v-model="password" 
              label="Contraseña" 
              type="password"
              prepend-inner-icon="mdi-lock"
              outlined
              dense
              class="mb-4"
            ></v-text-field>
            <v-btn type="submit" color="primary" block large>Continuar <v-icon right>mdi-send</v-icon></v-btn>
          </v-form>
          <div class="text-center">
            <a href="#" class="font-weight-bold">¿Olvidaste tu contraseña?</a>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div class="text-center p-5 font-weight-bold w-100 fixed-bottom">
      Copyright Abai Group. {{ new Date().getFullYear() }}
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showFormImage: false // Variable para controlar la visibilidad de la imagen del formulario
    };
  },
  methods: {
    login() {
      if (this.username === 'usuario' && this.password === 'contraseña') {
        localStorage.setItem('isLoggedIn', true);
        this.$router.push({ name: 'dashboard' });
      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
.login-card {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}
.image-container {
  background-image: url('../../public/card-login-abai.png');
  background-position: center;
  background-size: cover;
}
.image-container img {
  display: none; /* Oculta la imagen en pantallas más pequeñas */
}
.form-container {
  width: 100%;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.text-center {
  text-align: center;
}
.font-weight-bold {
  font-weight: bold;
}
.fixed-bottom {
  position: absolute;
  bottom: 0;
}
.mb-4 {
  margin-bottom: 1rem;
}
.my-3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>