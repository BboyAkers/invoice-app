<script setup lang="ts">
import Card from '@/components/Card.vue'
import { useInvoiceStore } from '@/stores/invoices'

//TODO: use vite-svg-loader for svgs and play around with svg sizing

const invoiceStore = useInvoiceStore()
invoiceStore.loadInvoices()
</script>
<template>
  <div>
    <div class="flex justify-between pb-4 md:container md:mx-auto md:px-10">
      <div class="inline-block">
        <h2 class="text-2xl font-bold">Invoices</h2>
        <p class="text-grey">{{ invoiceStore.count }} Invoices</p>
      </div>
      <div class="flex">
        <div class="flex">
          <!-- <button class="self-center inline-block px-4 text-lg font-bold">
              Filter <span><img class="inline" src="@/assets/icon-arrow-down.svg" /></span>
            </button> -->
          <!-- <ul class="">
              <li>Filter 1</li>
              <li>Filter 2</li>
              <li>Filter 3</li>
            </ul> -->
        </div>
        <button class="self-center px-2 py-3 rounded-full bg-purple-light">
          <img
            src="@/assets/icon-plus.svg"
            class="inline-block h-10 p-3 rounded-full bg-white-light"
          />
          <span class="pl-2 pr-4 text-lg font-bold text-white-light">New</span>
        </button>
      </div>
    </div>
    <div v-for="invoice in invoiceStore.invoices" :key="invoice.id" class="py-4">
      <RouterLink :to="{ name: 'invoice.details', params: { id: invoice.id } }">
        <Card>
          <div class="flex justify-between pb-4 text-extra">
            <h3 class="text-lg font-bold">
              <span class="text-purple-light">#</span>{{ invoice.id }}
            </h3>
            <p class="text-grey">{{ invoice.clientName }}</p>
          </div>
          <div class="flex justify-between">
            <div>
              <p class="text-grey">Due 19 Aug 2021</p>
              <p class="font-bold">${{ invoice.total.toFixed(2) }}</p>
            </div>
            <div
              class="px-6 py-2 text-lg font-bold rounded"
              :class="{
                'bg-green-light text-green': invoice.status === 'paid',
                'bg-orange-light text-orange': invoice.status === 'pending',
                'bg-white-light text-grey-dark': invoice.status === 'draft'
              }"
            >
              <div
                class="inline-block w-2 h-2 rounded-full"
                :class="{
                  'bg-green': invoice.status === 'paid',
                  'bg-orange': invoice.status === 'pending',
                  'bg-grey-dark': invoice.status === 'draft'
                }"
              ></div>
              <p class="inline-block mx-2 capitalize">{{ invoice.status }}</p>
            </div>
          </div>
        </Card>
      </RouterLink>
    </div>
  </div>
</template>
