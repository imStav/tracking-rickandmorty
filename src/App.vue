<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/" class="font-semibold hover-link">Home</RouterLink>
      <RouterLink to="/" class="identity"
        >Rick & Morty <br /><span class="text-lg">tracking</span></RouterLink
      >
      <RouterLink to="/about" class="font-semibold hover-link"
        >About</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
