<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline">Agregar Nueva Licencia</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addLicense">
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
      tipos: ['Windows', 'Office', 'Appa']
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addLicense() {
      const newLicense = {
        nombre: this.nombre,
        tipo: this.tipo
      };
      // Emitir el evento 'add-license' con los datos de la nueva licencia
      this.$emit('add-license', newLicense);
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