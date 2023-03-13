<script setup lang="ts">
import MobileNav from '@/components/navbar/MobileNav.vue'
</script>

<template>
  <main class="h-full bg-white-light">
    <nav>
      <MobileNav />
    </nav>
    <section class="px-4 pt-20">
      <RouterView />
    </section>
  </main>
</template>
