<template>
  <div>
    <!-- Redacción de Email -->
    <v-container class="fill-height d-flex">
      <v-card class="pa-5 email-card">
        <v-card-title class="headline">Redactar Correo Electrónico</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="sendEmail">
            <v-text-field 
              v-model="email.to" 
              label="Para" 
              outlined
              dense
              class="mb-4"
            ></v-text-field>
            <v-text-field 
              v-model="email.subject" 
              label="Asunto" 
              outlined
              dense
              class="mb-4"
            ></v-text-field>
            <v-textarea 
              v-model="email.message" 
              label="Mensaje" 
              outlined
              dense
              rows="5"
              class="mb-4"
            ></v-textarea>
            <v-btn type="submit" color="primary" block large>Enviar</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

      <!-- Cuadrícula de Recordatorios -->
      <v-container class="reminder-container">
        <v-row dense>
          <v-col
            v-for="reminder in reminders"
            :key="reminder.id"
            cols="12"
            md="4"
            :class="reminder.priorityClass"
          >
            <v-card class="pa-3">
              <v-card-title class="headline">{{ reminder.title }}</v-card-title>
              <v-card-text>{{ reminder.date }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Modal de Confirmación -->
    <v-dialog v-model="modalVisible" max-width="500">
      <v-card>
        <v-card-title class="headline">{{ modalTitle }}</v-card-title>
        <v-card-text>{{ modalMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="modalVisible = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: {
        to: '',
        subject: '',
        message: ''
      },
      modalVisible: false,
      modalTitle: '',
      modalMessage: '',
      reminders: [
        { id: 1, title: 'Tarea 1', date: '2024-06-01', priority: 'alta', priorityClass: 'high-priority' },
        { id: 2, title: 'Tarea 2', date: '2024-06-02', priority: 'media', priorityClass: 'medium-priority' },
        { id: 3, title: 'Tarea 3', date: '2024-06-03', priority: 'baja', priorityClass: 'low-priority' }
      ]
    };
  },
  methods: {
    sendEmail() {
      this.modalTitle = 'Correo enviado con éxito';
      this.modalMessage = 'Su correo ha sido enviado exitosamente.';
      this.modalVisible = true;

      // Reiniciar el formulario
      this.email.to = '';
      this.email.subject = '';
      this.email.message = '';
    }
  }
};
</script>

<style scoped>
.email-card {
  width: 40%;
  height: 80vh;
  margin-left: 20px;
}
.reminder-container {
  width: 50%;
  margin-left: 20px;
}
.high-priority {
  border-left: 5px solid red;
  border-right: 5px solid red;
  border-bottom: 5px solid red;
  border-top: 5px solid red;
}
.medium-priority {
  border-left: 5px solid yellow;
  border-right: 5px solid yellow;
  border-bottom: 5px solid yellow;
  border-top: 5px solid yellow;
}
.low-priority {
  border-left: 5px solid green;
  border-right: 5px solid green;
  border-bottom: 5px solid green;
  border-top: 5px solid green;
}
</style>
