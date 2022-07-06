<script setup>
import { onMounted, ref } from "vue";
import { getAllCharacters } from "../apis/rickApi";

const characters = ref("");

onMounted(async () => {
  const getCharacters = await getAllCharacters();
  characters.value = getCharacters;
  //console.log(getCharacters);
});
</script>

<template>
  <div class="main-grid">
    <div v-for="c in characters" class="font-glitch p-4">
      <div class="character-label">
        <h2 class="character-name" :title="c.name">
          {{ c.name }}
        </h2>
        <p v-if="c.status === 'Alive'" class="text-green-400">{{ c.status }}</p>
        <p v-else-if="c.status === 'Dead'" class="text-red-400">
          {{ c.status }}
        </p>
        <p v-else class="text-slate-600">{{ c.status }}</p>
      </div>
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
