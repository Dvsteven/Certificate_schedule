<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline">Agregar Nuevo Certificado</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addCertificate">
          <v-text-field 
            v-model="nombre" 
            label="Nombre"
            outlined
            dense
            class="mb-4"
            required
          ></v-text-field>
          <v-select
            v-model="tipo"
            :items="tipos"
            label="Tipo"
            outlined
            dense
            class="mb-4"
            required
          ></v-select>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" type="submit" text>Aceptar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      nombre: '',
      tipo: '',
      tipos: ['Seguridad', 'Calidad', 'Cumplimiento']
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addCertificate() {
      const newCertificate = {
        nombre: this.nombre,
        tipo: this.tipo
      };
      this.$emit('add-certificate', newCertificate);
      this.resetForm();
      this.close();
    },
    resetForm() {
      this.nombre = '';
      this.tipo = '';
    }
  }
};
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>