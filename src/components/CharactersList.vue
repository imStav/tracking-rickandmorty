<script setup>
import { onMounted, ref } from "vue";
import { getAllCharacters } from "../apis/rickApi";
import PopupCharacterInfos from "./PopupCharacterInfos.vue";

//Reactive variable to pass and access dynamically the data retrieved
//From RESTapi call at rickandmortyapi.com
const characters = ref("");

onMounted(async () => {
  const getCharacters = await getAllCharacters();
  characters.value = getCharacters;
});

const currentElement = ref({
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  origin: { name: "" },
  location: { name: "" },
});

function getCharacterInfos(character) {
  currentElement.value = character;
  let modal = document.querySelector("dialog");
  modal.showModal();
}
</script>

<template>
  <div class="main-grid">
    <!-- This block of code generates all the characters trough a loop
    on the data retrieved from RESTapi at rickandmortyapi.com -->
    <div v-for="c in characters" :key="c.id" class="font-glitch p-4">
      <!-- Renders the flag-like label that highlights the character's
      name and its status -->
      <div class="character-label">
        <h2 class="character-name">{{ c.name }}</h2>

        <!-- This displays the character's status in a given color 
        (green: Alive / red: Dead / slate: unknown) -->
        <p v-if="c.status === 'Alive'" class="text-green-400">{{ c.status }}</p>
        <p v-else-if="c.status === 'Dead'" class="text-red-400">
          {{ c.status }}
        </p>
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
        @click="() => getCharacterInfos(c)"
      />
    </div>

    <PopupCharacterInfos
      :id="currentElement.id"
      :image="currentElement.image"
      :name="currentElement.name"
      :status="currentElement.status"
      :species="currentElement.species"
      :origin="currentElement.origin.name"
      :location="currentElement.location.name"
    />
  </div>
</template>
