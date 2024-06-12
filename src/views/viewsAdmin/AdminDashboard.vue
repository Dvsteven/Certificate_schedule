<template>
  <v-container>
    <div class="team">
      <h1 class="subheading grey--text">Informacion Personal</h1>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
//Modelo de la cuadricula de productos vigencias
export default {
  data() {
    return {
      headers: [
        { text: 'Licencias', value: 'licencias' },
        { text: 'Certificados', value: 'certificados' },
        { text: 'Activación', value: 'activacion' },
        { text: 'Vigencia', value: 'vigencia' },
        { text: 'Estado', value: 'estado' }
      ],
      items: [
        { licencias: 'Licencia A', certificados: 'Certificado 1', activacion: '2023-01-01', vigencia: '2024-01-01', estado: 'Activo' },
        { licencias: 'Licencia B', certificados: 'Certificado 2', activacion: '2022-05-15', vigencia: '2023-05-15', estado: 'Expirado' },
      ]
    };
  }
}
</script>

<style>
.team {
  margin-bottom: 20px;
}
</style>