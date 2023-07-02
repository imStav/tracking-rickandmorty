<script setup>
import { RouterLink, RouterView } from "vue-router";

let github = "https://github.com/imStav";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/" class="identity"
        >Rick & Morty <br /><span class="text-lg">tracking</span></RouterLink
      >
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="footer-section">    
      <RouterLink to="/about" class="font-light hover-link border-b border-dotted">
        About
      </RouterLink>

      <div>
        Made w/ ❤️ & ☕ by 
        <a :href="github" class="font-light hover-link border-b border-dotted">
         imStav
        </a>
      </div>
    </div>
  </footer>
</template>
