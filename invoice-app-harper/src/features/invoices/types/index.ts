export interface InvoiceFilters {
  status?: InvoiceStatus;
  pageIndex: number;
  pageSize: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoiceItem {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: "paid" | "pending" | "draft";
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
  total: number;
}

export interface InvoiceResponse {
  items: Invoice[];
  total: number;
}

export type InvoiceStatus = "paid" | "pending" | "draft";

