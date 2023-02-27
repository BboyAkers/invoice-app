<!-- <script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
</script> -->

<template>
  <div class="p-5 bg-white rounded-md">
    <div class="flex justify-between pb-4">
      <h3 class="text-lg font-bold"><span class="text-purple-light">#</span>RT3080</h3>
      <p class="text-grey">Jensen Huang</p>
    </div>
    <div class="flex justify-between">
      <div>
        <p class="text-grey">Due 19 Aug 2021</p>
        <p class="font-bold">$1,500.00</p>
      </div>
      <div class="px-6 py-2 text-lg font-bold rounded bg-green-light text-green">
        <div class="inline-block w-2 h-2 rounded-full bg-green"></div>
        <p class="inline-block mx-2">Paid</p>
      </div>
    </div>
  </div>
  <!-- <div class="card">
    <div class="card__header">
      <div class="card__header__title">
        <h2>{{ title }}</h2>
      </div>
      <div class="card__header__actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div> -->
</template>
