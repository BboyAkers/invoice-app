import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InvoiceDetailsFooterVue from '../footer/InvoiceDetailsFooter.vue'

describe('InvoiceDetailsFooterVue', () => {
  it('renders properly', () => {
    const invoiceFooter = mount(InvoiceDetailsFooterVue, { props: { invoiceID: 'RT3080' } })
  })
})
