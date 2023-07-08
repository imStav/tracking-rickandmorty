<script setup>
import { RouterLink, RouterView } from "vue-router";

let github = "https://github.com/imStav";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/" class="identity">Tracking <br />
        <span class="text-2xl">Rick & Morty</span>
      </RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="footer-section">    
      <RouterLink to="/about" class="font-light hover-link">
        About
      </RouterLink>

      <div>
        Made w/ ❤️ & ☕ by 
        <a :href="github" class="font-light hover-link">
         imStav
        </a>
      </div>
    </div>
  </footer>
</template>
