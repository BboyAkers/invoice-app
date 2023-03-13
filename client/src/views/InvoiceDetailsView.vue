<script setup lang="ts">
import { useRoute } from 'vue-router'
import Card from '@/components/Card.vue'
import { useInvoiceStore } from '@/stores/invoices'
import { storeToRefs } from 'pinia'
import InvoiceDetailsFooter from '@/components/footer/InvoiceDetailsFooter.vue'

const route = useRoute()

const invoiceStore = useInvoiceStore()
const { getInvoiceById } = storeToRefs(invoiceStore)

const invoiceId = route.params.id as unknown
const invoiceDetail = getInvoiceById.value(invoiceId as string)
</script>

<template>
  <div class="pb-24">
    <RouterLink to="/">
      <p class="inline-block text-lg font-bold">
        <img
          src="@/assets/icon-arrow-left.svg"
          class="inline-block h-10 p-3 rounded-full bg-white-light"
        />
        Go Back
      </p>
    </RouterLink>
    <Card class="mb-6">
      <div class="flex justify-between">
        <div class="flex">
          <p class="self-center text-grey">Status</p>
        </div>
        <div
          class="px-6 py-2 text-lg font-bold rounded"
          :class="{
            'bg-green-light text-green': invoiceDetail?.status === 'paid',
            'bg-orange-light text-orange': invoiceDetail?.status === 'pending',
            'bg-white-light text-grey-dark': invoiceDetail?.status === 'draft'
          }"
        >
          <div
            class="inline-block w-2 h-2 rounded-full"
            :class="{
              'bg-green': invoiceDetail?.status === 'paid',
              'bg-orange': invoiceDetail?.status === 'pending',
              'bg-grey-dark': invoiceDetail?.status === 'draft'
            }"
          ></div>
          <p class="inline-block mx-2 capitalize">{{ invoiceDetail?.status }}</p>
        </div>
      </div>
    </Card>
    <Card>
      <div class="flex">
        <div class="flex-1">
          <h3 class="text-lg font-bold text-grey-dark">
            <span class="text-purple-light">#</span>{{ invoiceDetail?.id }}
          </h3>
          <div class="pb-4 text-grey">
            <p>{{ invoiceDetail?.description }}</p>
            <p>{{ invoiceDetail?.senderAddress.street }}</p>
            <p>{{ invoiceDetail?.senderAddress.city }}</p>
            <p>{{ invoiceDetail?.senderAddress.postCode }}</p>
            <p>{{ invoiceDetail?.senderAddress.country }}</p>
          </div>
          <div class="pb-4">
            <p class="text-grey">Invoice Date</p>
            <p class="font-bold text-grey-dark">{{ invoiceDetail?.createdAt }}</p>
          </div>
          <div class="pb-4">
            <p class="text-grey">Payment Due</p>
            <p class="font-bold text-grey-dark">{{ invoiceDetail?.paymentDue }}</p>
          </div>
          <div>
            <p class="text-grey">Sent to</p>
            <p class="font-bold text-grey-dark">{{ invoiceDetail?.clientEmail }}</p>
          </div>
        </div>
        <div class="flex-1 text-grey">
          <p>Bill To</p>
          <p class="font-bold text-grey-dark">{{ invoiceDetail?.clientName }}</p>
          <p>{{ invoiceDetail?.clientEmail }}</p>
          <p>{{ invoiceDetail?.clientAddress.street }}</p>
          <p>{{ invoiceDetail?.clientAddress.city }}</p>
          <p>{{ invoiceDetail?.clientAddress.postCode }}</p>
          <p>{{ invoiceDetail?.clientAddress.country }}</p>
        </div>
      </div>
      <div class="p-4 mt-8 rounded-md bg-white-light">
        <div
          class="flex justify-between pb-4 text-grey-dark"
          v-for="item in invoiceDetail?.items"
          :key="item.name"
        >
          <div>
            <p class="font-bold">{{ item.name }}</p>
            <p class="font-bold text-purple-dark">
              {{ item.quantity }} x ${{ item.price.toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between p-4 rounded-b-lg bg-grey-dark text-white-light">
        <p class="self-center">Grand Total</p>
        <p class="text-2xl font-bold">${{ invoiceDetail?.total.toFixed(2) }}</p>
      </div>
    </Card>
    <InvoiceDetailsFooter />
  </div>
</template>
