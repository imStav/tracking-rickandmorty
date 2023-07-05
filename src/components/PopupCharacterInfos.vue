<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
});

function closeInfos() {
  let modal = document.querySelector("dialog");
  modal.close();
};
</script>

<template>
  <dialog class="dialog-ui" 
    :class="status === 'Alive' 
    ? 'backdrop:bg-emerald-700/30' 
    : status === 'Dead' 
    ? 'backdrop:bg-red-700/30' 
    : 'backdrop:bg-gray-700/30'" 
    :id="id" 
    v-motion-slide-visible-bottom
  >
    <div class="flex flex-col font-sans mb-4">
      <div class="mb-3">
        <h2 class="font-bold text-lg">{{ name }}</h2>
        <p class="font-light">{{ origin }}</p>
      </div>

      <img 
      :src="image" 
      class="max-w-36 rounded-2xl" 
      :alt="`picture of ${name}`" 
      />
      
      <div class="my-3">
        <p>Type: {{ species }}</p>
        <p>Location: {{ location }}</p>
      </div>

      <div 
        class="character-status mb-3" 
        :class="status === 'Alive' 
        ? 'character-status-alive' 
        : status === 'Dead' 
        ? 'character-status-dead' 
        : 'character-status-unknown'"
      >
        <p class="font-glitch">{{ status }}</p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:justify-between">
      <button @click="closeInfos" class="more-infos-btn modal-btn">More infos</button>
      <button @click="closeInfos" class="close-infos-btn modal-btn mt-3 sm:mt-0">Close</button>
    </div>
  </dialog>
</template>
