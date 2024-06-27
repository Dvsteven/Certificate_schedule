<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Usuarios Creados</v-card-title>
            <v-card-text>
              <div>
                <strong>Último usuario creado:</strong> {{ ultimoUsuario.nombre }}
              </div>
              <div>
                <strong>Fecha:</strong> {{ ultimoUsuario.fecha }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Licencias y Certificados Registrados</v-card-title>
            <v-card-text>
              <div>
                <strong>Última licencia o certificado registrado:</strong> {{ ultimaLicencia.nombre }}
              </div>
              <div>
                <strong>Fecha de creación:</strong> {{ ultimaLicencia.fecha }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        ultimoUsuario: {
          nombre: 'Juan Pérez',
          fecha: '2024-06-26'
        },
        ultimaLicencia: {
          nombre: 'Certificado de Seguridad',
          fecha: '2024-06-25'
        }
      };
    },
    // Elimina el método generarPDF si no lo has eliminado ya
  });
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  