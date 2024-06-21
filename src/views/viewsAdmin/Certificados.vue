<template>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Certificados
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="certificates" class="elevation-1">
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Certificados Registrados</v-toolbar-title>
                  </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon small @click="editCertificate(item)">
                    mdi-pencil
                  </v-icon>
                  <v-icon small @click="deleteCertificate(item)">
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
        certificates: [] // Estructura para almacenar los certificados
      };
    },
    created() {
      this.loadCertificates();
      this.$root.$on('add-certificate', this.addCertificate);
    },
    methods: {
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
    //   editCertificate(certificate) {
    //     // Implementar lógica de edición de certificados
    //   },
      deleteCertificate(certificate) {
        const index = this.certificates.indexOf(certificate);
        if (index > -1) {
          this.certificates.splice(index, 1);
          this.saveCertificates();
        }
      }
    }
  };
  </script>  