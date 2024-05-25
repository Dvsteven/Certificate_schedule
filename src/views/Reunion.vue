<template>
    <div>
      <div class="meeting-link">
        <a href="https://meet.google.com/" target="_blank">Ir a Google Meet</a>
      </div>
      <div id="calendar"></div>
    </div>
  </template>
  
  <script>
  import { Calendar } from '@fullcalendar/core';
  import dayGridPlugin from '@fullcalendar/daygrid';
  
  export default {
    mounted() {
      this.initCalendar();
    },
    methods: {
      initCalendar() {
        const calendarEl = document.getElementById('calendar');
        const calendar = new Calendar(calendarEl, {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth', // Vista inicial del calendario
          events: [
            // Aquí puedes agregar eventos para fechas específicas
            { title: 'Evento importante', start: '2024-05-15', color: 'red' }, // Ejemplo de evento en una fecha específica
            { title: 'Otro evento', start: '2024-05-20', end: '2024-05-22', color: 'blue' } // Ejemplo de evento en un rango de fechas
          ]
        });
        calendar.render();
      }
    }
  }
  </script>
  
  <style>
  .meeting-link {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .meeting-link a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .meeting-link a:hover {
    background-color: #0056b3;
  }
  </style>
  