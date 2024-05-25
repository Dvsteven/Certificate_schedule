<template>
  <div class="projects">
    <h1 class="subheading grey--text">Products</h1>
    <v-container>
      <v-layout row wrap class="mb-4">
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn small outlined color="green" @click="sortBy('title')" class="mr-2" dark v-on="on">
           <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By product name</span>
        </v-btn>
      </template>
        <span>Sort product</span>
      </v-tooltip>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
<script/>
