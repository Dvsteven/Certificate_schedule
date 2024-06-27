<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-btn @click="openDialog">Crear Nuevo Evento</v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Nuevo Evento</span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="event.name"
                  :rules="[rules.required]"
                  label="Nombre del Evento"
                  required
                ></v-text-field>
                <v-menu
                  ref="dateMenu"
                  v-model="dateMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="event.date"
                      label="Fecha del Evento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="event.date"
                    no-title
                    scrollable
                    @input="dateMenu = false"
                  ></v-date-picker>
                </v-menu>
                <v-menu
                  ref="startMenu"
                  v-model="startMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="event.startTime"
                      label="Tiempo de Inicio"
                      prepend-icon="mdi-clock"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="startMenu"
                    v-model="event.startTime"
                    full-width
                    @click:minute="$refs.startMenu.save(event.startTime)"
                  ></v-time-picker>
                </v-menu>
                <v-menu
                  ref="endMenu"
                  v-model="endMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="event.endTime"
                      label="Tiempo de Fin"
                      prepend-icon="mdi-clock"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="endMenu"
                    v-model="event.endTime"
                    full-width
                    @click:minute="$refs.endMenu.save(event.endTime)"
                  ></v-time-picker>
                </v-menu>
                <v-autocomplete
                  v-model="event.people"
                  :items="people"
                  :search-input.sync="search"
                  item-text="name"
                  item-value="email"
                  label="Agregar Personas"
                  chips
                  clearable
                  multiple
                ></v-autocomplete>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDialog">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="saveEvent">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="12" md="8">
        <div class="d-flex justify-space-between align-center mb-3">
          <v-btn icon @click="prevMonth">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <div>{{ formattedMonthYear }}</div>
          <v-btn icon @click="nextMonth">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <v-calendar
          v-model="selectedDate"
          ref="calendar"
          @click:date="date => selectedDate = date"
          :events="events"
          color="primary"
          show-event="true"
        >
          <template v-slot:day="{ day, outside }">
            <div :class="{ 'v-btn--active': isToday(day) }">
              <span>{{ day.date }}</span>
            </div>
          </template>
        </v-calendar>
        <v-btn @click="goToToday">Ir a Hoy</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: false,
      event: {
        name: '',
        date: null,
        startTime: null,
        endTime: null,
        people: []
      },
      people: [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' }
      ],
      search: '',
      selectedDate: new Date().toISOString().substr(0, 10),
      startMenu: false,
      endMenu: false,
      dateMenu: false,
      events: [],
      rules: {
        required: value => !!value || 'Requerido.',
      }
    };
  },
  computed: {
    formattedMonthYear() {
      const options = { year: 'numeric', month: 'long' };
      return new Date(this.selectedDate).toLocaleDateString('es-ES', options);
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.resetForm();
    },
    saveEvent() {
      if (this.$refs.form.validate()) {
        this.events.push({ ...this.event });
        this.closeDialog();
      }
    },
    resetForm() {
      this.event = {
        name: '',
        date: null,
        startTime: null,
        endTime: null,
        people: []
      };
      this.$refs.form.reset();
    },
    isToday(day) {
      const today = new Date().toISOString().substr(0, 10);
      return day.date === today;
    },
    goToToday() {
      this.selectedDate = new Date().toISOString().substr(0, 10);
      this.$refs.calendar.move(this.selectedDate);
    },
    prevMonth() {
      const date = new Date(this.selectedDate);
      date.setMonth(date.getMonth() - 1);
      this.selectedDate = date.toISOString().substr(0, 10);
      this.$refs.calendar.move(this.selectedDate);
    },
    nextMonth() {
      const date = new Date(this.selectedDate);
      date.setMonth(date.getMonth() + 1);
      this.selectedDate = date.toISOString().substr(0, 10);
      this.$refs.calendar.move(this.selectedDate);
    }
  }
};
</script>

<style scoped>
.v-btn--active {
  background-color: #1976d2 !important;
  color: white !important;
}
.d-flex {
  display: flex;
}
.justify-space-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
.mb-3 {
  margin-bottom: 1rem;
}
</style>