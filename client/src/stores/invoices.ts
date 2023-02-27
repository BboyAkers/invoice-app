import { defineStore } from 'pinia'
import invoicesData from '../data/invoices.json'

interface Invoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: string
  senderAddress: Address
  clientAddress: Address
  items: Item[]
  total: number
}

interface Address {
  street: string
  city: string
  postCode: string
  country: string
}

interface Item {
  name: string
  quantity: number
  price: number
  total: number
}

export const useInvoiceStore = defineStore('InvoiceStore', {
  state: () => {
    return {
      invoices: [] as Invoice[]
    }
  },
  actions: {
    async loadInvoices() {
      this.invoices = await invoicesData
    }
  }
})
