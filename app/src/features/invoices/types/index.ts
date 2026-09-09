export interface InvoiceFilters {
    status?: InvoiceStatus
    pageIndex: number
    pageSize: number
}

export interface Invoice {
    id: string
    createdAt: string
    paymentDue: string
    description: string
    paymentTerms: number
    clientName: string
    clientEmail: string
    status: 'paid' | 'pending' | 'draft'
    total: number
}

export interface InvoiceResponse {
    items: Invoice[]
    total: number
}

export type InvoiceStatus = 'paid' | 'pending' | 'draft'