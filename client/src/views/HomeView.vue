<script setup lang="ts"></script>

<template>
  <main>
    <nav>
      <div
        class="fixed top-0 left-0 z-50 inline-flex items-center justify-between w-full h-16 pr-2 bg-blue-dark"
      >
        <div class="inline-flex items-center w-16 h-full rounded-r-xl bg-purple-light">
          <img class="mx-auto" src="@/assets/logo.svg" alt="" />
        </div>
        <div class="inline-flex h-full gap-5 rounded-r-xl">
          <img class="self-center h-6" src="@/assets/icon-moon.svg" alt="" />
          <div class="border-l border-solid border-purple-extradark"></div>
          <img class="self-center h-10 rounded-full" src="@/assets/image-avatar.jpg" alt="" />
        </div>
      </div>
    </nav>
    <section>
      <div class="md:container md:mx-auto md:px-10">
        <h1>This is a home page</h1>
      </div>
    </section>
  </main>
</template>
