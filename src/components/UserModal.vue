<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline">Agregar Nuevo Usuario</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addUser">
          <v-text-field 
            v-model="nombre" 
            label="Nombre"
            outlined
            dense
            class="mb-4"
            required
          ></v-text-field>
          <v-text-field 
            v-model="apellido" 
            label="Apellido"
            outlined
            dense
            class="mb-4"
            required
          ></v-text-field>
          <v-text-field 
            v-model="email" 
            label="Correo Electrónico"
            outlined
            dense
            class="mb-4"
            required
          ></v-text-field>
          <v-select
            v-model="area"
            :items="areas"
            label="Área"
            outlined
            dense
            class="mb-4"
            required
          ></v-select>
          <v-select
            v-model="licencia"
            :items="licencias"
            label="Licencia"
            outlined
            dense
            class="mb-4"
            required
          ></v-select>
          <v-select
            v-model="certificado"
            :items="certificados"
            label="Certificado"
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
      apellido: '',
      email: '',
      area: '',
      licencia: '',
      certificado: '',
      areas: ['Recursos Humanos', 'Soporte', 'Tecnologia'],
      licencias: ['Windows 10 Pro', 'Office 2019', 'Adobe Photohsop'], 
      certificados: ['Certificado X', 'Certificado Y', 'Certificado'], 
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addUser() {
      const newUser = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        area: this.area,
        licencia: this.licencia,
        certificado: this.certificado,
        estado: 'Activo' // Estado por defecto
      };
      this.$emit('add-user', newUser);
      this.resetForm();
      this.close();
    },
    resetForm() {
      this.nombre = '';
      this.apellido = '';
      this.email = '';
      this.area = '';
      this.licencia = '';
      this.certificado = '';
    }
  }
};
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>