<script setup>
import { onMounted, ref } from "vue";
import { getAllCharacters } from "../apis/rickApi";

//Reactive variable to pass and access dynamically the data retrieved
//From RESTapi call at rickandmortyapi.com
const characters = ref("");

onMounted(async () => {
  const getCharacters = await getAllCharacters();
  characters.value = getCharacters;
});
</script>

<template>
  <div class="main-grid">
    <!-- This block of code generates all the characters trough a loop
    on the data retrieved from RESTapi at rickandmortyapi.com -->
    <div v-for="c in characters" class="font-glitch p-4">
      
      <!-- Renders the flag-like label that highlights the character's
      name and its status -->
      <div class="character-label">
        <h2 class="character-name" :title="c.name">
          {{ c.name }}
        </h2>

        <!-- This displays the character's status in a given color 
        (green: Alive / red: Dead / slate: unknown) -->
        <p v-if="c.status === 'Alive'" class="text-green-400">{{ c.status }}</p>
        <p v-else-if="c.status === 'Dead'" class="text-red-400">{{ c.status }}</p>
        <p v-else class="text-slate-600">{{ c.status }}</p>
      </div>

      <!-- Characters's avatars are dynamically generated too 
      and lazy-loaded -->
      <img
        :src="c.image"
        class="character-img"
        :title="c.name"
        :alt="`picture of ${c.name}`"
        loading="lazy"
      />
    </div>
  </div>
</template>
