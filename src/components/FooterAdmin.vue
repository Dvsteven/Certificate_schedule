<template>
  <v-footer
    dark
    padless
    app
    inset
    
  >
  <!--Propiedades footer-->
    <v-card
      class="flex"
      flat
      tile
      color="#00457C" 
      :elevation="5"
    >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Abai Group</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
