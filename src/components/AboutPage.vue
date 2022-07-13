<script setup>
import { ref } from "vue";

const title = ref("About");
</script>

<template>
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p>
      <i>Rick & Morty Status Tracker</i> is a simple tracking tool to let you
      know if your favourite character from <strong>Rick & Morty</strong> is
      still alive in the current TV show's timeline.
    </p>

    <p class="my-8">
      All the data are retrieved thanks to the Rick & Morty api at
      <a
        href="https://rickandmortyapi.com/"
        class="underline hover-link"
        title="Visit the rickandmortyapi website"
        target="_blank"
        >rickandmortyapi.com</a
      >
    </p>

    <p>
      This project is subject to changes / evolutions in the future. I'm working
      on new features, such as an integrated search engine, filters, etc.
    </p>
</template>
