<template>
    <div class="projects">
      <h1 class="subheading grey--text">Products</h1>
      <v-container>
        <v-layout row wrap class="mb-4">
          <!-- Botón de clasificación por nombre de producto -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" dark v-on="on">
                <v-icon left small>label</v-icon>
                <span class="caption text-lowercase">Por nombre de producto</span>
              </v-btn>
            </template>
            <span>Clasificar por nombre</span>
          </v-tooltip>
  
          <!-- Nuevo botón de clasificación (ejemplo) -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn small outlined color="blue" @click="sortBy('date')" class="mr-2" dark v-on="on">
                <v-icon left small>event</v-icon>
                <span class="caption text-lowercase">Por fecha</span>
              </v-btn>
            </template>
            <span>Clasificar por fecha</span>
          </v-tooltip>
        </v-layout>
      </v-container>
    </div>
  </template>
  
  <script>
  </script>
  