<template>
  <div>
    <!-- Clasificación de productos -->
    <v-container>
      <v-layout row wrap class="mb-4">
        <!-- Clasificación por nombre -->
        <v-tooltip bottom>
          <template v-slot:activator="{  }">
            <v-menu offset-y v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="slide-y-transition">
              <template v-slot:activator="{ on }">
                <v-btn small outlined color="green" dark v-on="on" class="mr-4">
                  <v-icon left small>label</v-icon>
                  <span class="caption text-lowercase">Por nombre de producto</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="sortBy('title', 'asc')">(Ascendente)</v-list-item>
                <v-list-item @click="sortBy('title', 'desc')">(Descendente)</v-list-item>
              </v-list>
            </v-menu>
          </template>
          <span>Clasificar por nombre</span>
        </v-tooltip>

        <!-- Clasificación por fecha -->
        <v-tooltip bottom>
          <template v-slot:activator="{  }">
            <v-menu offset-y v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="slide-y-transition">
              <template v-slot:activator="{ on }">
                <v-btn small outlined color="blue" dark v-on="on">
                  <v-icon left small>event</v-icon>
                  <span class="caption text-lowercase">Por fecha</span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="sortBy('date', 'asc')">(Ascendente)</v-list-item>
                <v-list-item @click="sortBy('date', 'desc')">(Descendente)</v-list-item>
              </v-list>
            </v-menu>
          </template>
          <span>Clasificar por fecha</span>
        </v-tooltip>
      </v-layout>
    </v-container>

    <!-- Lista de licencias -->
    <v-container>
      <v-card class="mb-4">
        <v-card-title class="headline">Licencias</v-card-title>
        <v-list dense>
          <v-list-item v-for="license in licenses" :key="license.id">
            <v-list-item-content>
              <v-list-item-title>{{ license.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>

    <!-- Lista de certificados -->
    <v-container>
      <v-card>
        <v-card-title class="headline">Certificados</v-card-title>
        <v-list dense>
          <v-list-item v-for="certificate in certificates" :key="certificate.id">
            <v-list-item-content>
              <v-list-item-title>{{ certificate.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      licenses: [
        { id: 1, name: 'Licencia 1' },
        { id: 2, name: 'Licencia 2' },
        { id: 3, name: 'Licencia 3' }
      ],
      certificates: [
        { id: 1, name: 'Certificado 1' },
        { id: 2, name: 'Certificado 2' },
        { id: 3, name: 'Certificado 3' }
      ],
      menu1: false,
      menu2: false
    };
  }
};
</script>
