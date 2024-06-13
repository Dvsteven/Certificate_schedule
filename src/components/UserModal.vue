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
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
        <v-btn color="blue darken-1" type="submit" @click="addUser">Aceptar</v-btn>
      </v-card-actions>
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
      areas: ['Recursos Humanos', 'Soporte Técnico', 'Calidad'],
      licencias: ['Licencia A', 'Licencia B', 'Licencia C'],
      certificados: ['Certificado X', 'Certificado Y', 'Certificado Z']
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
        estado: 'Activo' // Aquí podrías establecer un estado predeterminado si es necesario
      };
      this.$emit('add-user', newUser);
      this.close();
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.v-card-actions {
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: right;
}

.v-btn {
  min-width: 100px;
}
</style>