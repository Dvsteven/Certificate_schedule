<template>
    <div class="agenda">
      <!-- Calendario dinámico -->
      <v-calendar
        v-model="selectedDate"
        :week-start="1"
        :events="events"
        @change="handleDateChange"
      ></v-calendar>
  
      <!-- Formulario para crear recordatorio y agendar reunión -->
      <v-container>
        <v-row>
          <!-- Formulario para crear recordatorio -->
          <v-col cols="12" md="6">
            <v-card class="mt-4" height="100%">
              <v-card-title>Crear Recordatorio</v-card-title>
              <v-card-text>
                <v-text-field v-model="reminder.title" label="Título"></v-text-field>
                <v-text-field v-model="reminder.date" label="Fecha"></v-text-field>
                <v-btn @click="addReminder" color="primary">Crear</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
  
          <!-- Formulario para agendar reunión -->
          <v-col cols="12" md="6">
            <v-card class="mt-4" height="100%">
              <v-card-title>Agendar Reunión</v-card-title>
              <v-card-text>
                <v-text-field v-model="meeting.title" label="Título"></v-text-field>
                <v-text-field v-model="meeting.participants" label="Participantes"></v-text-field>
                <v-text-field v-model="meeting.date" label="Fecha"></v-text-field>
                <v-btn @click="scheduleMeeting" color="primary">Agendar</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Lista de licencias y certificados con fechas de vencimiento -->
      <v-card class="mt-4">
        <v-card-title>Fechas de Vencimiento</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="item in deadlines" :key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.deadline }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import VCalendar from 'v-calendar';
  
  export default {
    components: {
      VCalendar,
    },
    data() {
      return {
        selectedDate: new Date(),
        reminder: {
          title: '',
          date: '',
        },
        meeting: {
          title: '',
          participants: '',
          date: '',
        },
        events: [], // Eventos del calendario
        deadlines: [ // Fechas de vencimiento de licencias y certificados
          { id: 1, name: 'Licencia 1', deadline: '2024-06-30' },
          { id: 2, name: 'Certificado 1', deadline: '2024-07-15' },
        ],
      };
    },
    methods: {
    //   handleDateChange(selectedDate) {
    //     // Lógica para cambiar la fecha seleccionada
    //     alert('Fecha seleccionada: ' + selectedDate);
    //   },
      addReminder() {
        // Lógica para agregar un recordatorio
        this.events.push({
          title: this.reminder.title,
          date: new Date(this.reminder.date),
        });
        alert('Recordatorio creado: ' + JSON.stringify(this.reminder));
        // Reiniciar el formulario
        this.reminder.title = '';
        this.reminder.date = '';
      },
      scheduleMeeting() {
        // Lógica para agendar una reunión
        this.events.push({
          title: this.meeting.title,
          date: new Date(this.meeting.date),
        });
        alert('Reunión agendada: ' + JSON.stringify(this.meeting));
        // Reiniciar el formulario
        this.meeting.title = '';
        this.meeting.participants = '';
        this.meeting.date = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .agenda {
    padding: 20px;
  }
  </style>
  