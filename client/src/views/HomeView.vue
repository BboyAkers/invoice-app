<script setup lang="ts">
import Card from '@/components/Card.vue'
import MobileNav from '@/components/navbar/MobileNav.vue'
</script>

<template>
  <main class="h-screen bg-white-light">
    <nav>
      <MobileNav />
    </nav>
    <section class="px-4">
      <div class="flex justify-between pt-4 pb-4 mt-16 md:container md:mx-auto md:px-10">
        <div class="inline-block">
          <h2 class="text-2xl font-bold">Invoices</h2>
          <p class="text-grey">7 Invoices</p>
        </div>
        <div class="flex">
          <div class="flex">
            <button class="self-center inline-block px-4 text-lg font-bold">
              Filter <span><img class="inline" src="@/assets/icon-arrow-down.svg" /></span>
            </button>
            <!-- <ul class="">
              <li>Filter 1</li>
              <li>Filter 2</li>
              <li>Filter 3</li>
            </ul> -->
          </div>
          <button class="self-center px-2 py-3 rounded-full bg-purple-light">
            <img
              class="inline-block h-10 p-3 rounded-full bg-white-light"
              src="@/assets/icon-plus.svg"
            />
            <span class="pl-2 pr-4 text-lg font-bold text-white-light">New</span>
          </button>
        </div>
      </div>
      <div class="py-4">
        <Card />
      </div>
    </section>
  </main>
</template>
