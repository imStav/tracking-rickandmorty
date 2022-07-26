<script setup>
import { onMounted, ref } from "vue";
import { getAllCharacters } from "../apis/rickApi";
import PopupCharacterInfos from "./PopupCharacterInfos.vue";

/* Reactive variable to pass and access dynamically the data retrieved 
from RESTapi at rickandmortyapi.com */
const characters = ref("");

onMounted(async () => {
  const getCharacters = await getAllCharacters();
  characters.value = getCharacters;
});

/* Initializing a reactive (but void at start) object that takes the
PopupCharacterInfos props schema defined in its own component template
Coded by Usponso, July 17th 2022 */
const currentElement = ref({
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  origin: { name: "" },
  location: { name: "" },
});

/* Setting currentElement values to limit the injected values into the model
Coded with Usponso, July 17th 2022 */
function getCharacterInfos(character) {
  currentElement.value.id = character.id;
  currentElement.value.image = character.image;
  currentElement.value.name = character.name;
  currentElement.value.status = character.status;
  currentElement.value.species = character.species;
  currentElement.value.origin.name = character.origin.name;
  currentElement.value.location.name = character.location.name;
  let modal = document.querySelector("dialog");
  modal.showModal();
}
</script>

<template>
  <div class="main-grid">
    <!-- This block of code generates all the characters via a loop
    on the data retrieved from RESTapi at rickandmortyapi.com -->
    <div v-for="c in characters" :key="c.id" class="font-glitch p-4" v-motion-pop>
      <div class="character-label">
        <h2 class="character-name">{{ c.name }}</h2>

        <p v-if="c.status === 'Alive'" class="text-green-400">{{ c.status }}</p>
        <p v-else-if="c.status === 'Dead'" class="text-red-400">{{ c.status }}</p>
        <p v-else class="text-slate-600">{{ c.status }}</p>
      </div>

      <img
        :src="c.image"
        class="character-img"
        :title="c.name"
        :alt="`picture of ${c.name}`"
        loading="lazy"
        @click="() => getCharacterInfos(c)"
      />
      <!-- Calling the dynamic popup when an image is clicked -->
    </div>

    <!-- Passing back the reactive currentElement props 
    originally retrieved from PopupCharacterInfos component 
    Coded with Usponso, July 17th 2022 -->
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
