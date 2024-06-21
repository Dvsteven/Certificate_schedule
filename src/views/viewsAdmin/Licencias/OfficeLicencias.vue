<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              Lista de Licencias de Office
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="licenses"
                item-key="id"
                class="elevation-1"
              >
                <template v-slot:item.acciones="{ item, index }">
                  <v-btn color="blue darken-1" small @click="editarLicencia(item)">Editar</v-btn>
                  <v-btn color="red darken-1" small @click="eliminarLicencia(index)">Eliminar</v-btn>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Vencimiento', value: 'vencimiento' },
          { text: 'Acciones', value: 'acciones', sortable: false }
        ],
        licenses: []
      };
    },
    created() {
      // Escuchar el evento de nueva licencia de Office
      Vue.$on('add-office-license', this.addLicense);
      // Cargar las licencias al montar el componente
      this.loadLicenses();
    },
    methods: {
      addLicense(newLicense) {
        newLicense.id = this.licenses.length + 1; // Generar un ID único (simulado)
        this.licenses.push(newLicense);
        this.saveLicenses();
      },
      saveLicenses() {
        localStorage.setItem('officeLicenses', JSON.stringify(this.licenses));
      },
      loadLicenses() {
        this.licenses = JSON.parse(localStorage.getItem('officeLicenses')) || [];
      },
      editarLicencia(license) {
        // Implementar lógica para editar licencia si es necesario
        console.log('Editar licencia de Office:', license);
      },
      eliminarLicencia(index) {
        this.licenses.splice(index, 1);
        this.saveLicenses();
      }
    }
  };
  </script>
  
  <style scoped>
  </style>  