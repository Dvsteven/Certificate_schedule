<template>
  <div class="modal" v-if="visible">
    <!-- contenido del modal -->
    <h2>Nuevo Usuario</h2>
    <form @submit.prevent="crearUsuario">
      <input type="text" v-model="nombre" placeholder="Nombre completo" required>
      <input type="email" v-model="correo" placeholder="Correo electrónico" required>
      <select v-model="area" required>
        <option value="recursos_humanos">Recursos Humanos</option>
        <!-- otras opciones -->
      </select>
      <button type="submit">Crear Usuario</button>
    </form>
    <button @click="cerrarModal">Cerrar</button>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      nombre: '',
      correo: '',
      area: 'recursos_humanos'
    };
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrar');
    },
    crearUsuario() {
      // lógica para crear un nuevo usuario
      // después de crear el usuario, cierra el modal
      this.cerrarModal();
    }
  }
};
</script>

<style>
/* estilos para el modal */
</style>
