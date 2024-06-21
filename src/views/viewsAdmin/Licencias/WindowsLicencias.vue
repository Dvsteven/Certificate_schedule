<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Licencias de Windows
          </v-card-title>
          <v-card-text>
            <!-- Tabla de licencias -->
            <v-data-table
              :headers="headers"
              :items="licenses"
              item-key="id"
              class="elevation-1"
            >
              <!-- Botones de acciones para cada licencia -->
              <template v-slot:item.acciones="{ item, index }">
                <!-- Botones de editar y eliminar -->
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
      showModal: false,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Tipo', value: 'tipo' },
        { text: 'Vencimiento', value: 'vencimiento' },
        { text: 'Acciones', value: 'acciones', sortable: false }
      ],
      licenses: []
    };
  },
  methods: {
    saveLicenses() {
      localStorage.setItem('windowsLicenses', JSON.stringify(this.licenses));
    },
    loadLicenses() {
      this.licenses = JSON.parse(localStorage.getItem('windowsLicenses')) || [];
    },
    // Método para editar una licencia (comentado)
    // editarLicencia(license) {
    //   // Implementar lógica para editar licencia
    //   console.log('Editar licencia:', license);
    // },
    eliminarLicencia(index) {
      this.licenses.splice(index, 1);
      this.saveLicenses();
    }
  },
  mounted() {
    this.loadLicenses();
  }
};
</script>

<style scoped>
</style>
