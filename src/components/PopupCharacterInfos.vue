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
  <dialog class="dialog-ui" :id="id" v-motion-slide-visible-bottom>
    <div class="flex flex-col items-center font-sans mb-4">
      <img 
      :src="image" 
      class="w-36 rounded-full my-4" 
      :alt="`picture of ${name}`" 
      />

      <h2>{{ name }}</h2>

      <p>{{ status }}</p>
      <p>{{ species }}</p>
      <p>{{ origin }}</p>
      <p>{{ location }}</p>
    </div>

    <div class="flex justify-center">
      <button @click="closeInfos" class="close-infos-btn">X</button>
    </div>
  </dialog>
</template>
