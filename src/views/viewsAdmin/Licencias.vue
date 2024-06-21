<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Licencias
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="licenses" class="elevation-1">
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Licencias Registradas</v-toolbar-title>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small @click="editLicense(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteLicense(item)">
                    mdi-delete
                  </v-icon>
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
          { text: 'Nombre', value: 'nombre' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Acciones', value: 'actions', sortable: false }
        ],
        licenses: [] // Estructura para almacenar las licencias
      };
    },
    created() {
      this.loadLicenses();
      this.$root.$on('add-license', this.addLicense);
    },
    methods: {
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
      editLicense(license) {
        // Implementar lógica de edición de licencias
      },
      deleteLicense(license) {
        const index = this.licenses.indexOf(license);
        if (index > -1) {
          this.licenses.splice(index, 1);
          this.saveLicenses();
        }
      }
    }
  };
  </script>  