<script setup>
import { ref } from "vue";

const title = ref("About");
</script>

<template>
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="my-4">
      <i>Tracking Rick & Morty</i> is a simple tracking tool to let you
      know if your favourite character from <strong>Rick & Morty</strong> is
      still alive in the current TV show's timeline.
    </p>

    <p class="my-4">
      Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.
    </p>

    <p class="my-4">
      This project is subject to changes / evolutions in the future. I'm working
      on new features, such as an integrated search engine, filters, etc.
    </p>
</template>
