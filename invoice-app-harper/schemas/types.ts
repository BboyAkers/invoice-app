/**
 Generated from HarperDB schema
 Manual changes will be lost!
 > harper dev .
 */
export interface invoice_app_Address {
	id: string;
	street?: string;
	city?: string;
	postCode?: string;
	country?: string;
}

export type invoice_app_NewAddress = Omit<invoice_app_Address, 'id'>;
export type { invoice_app_Address as invoice_app_AddressRecord };
export type invoice_app_AddressRecords = invoice_app_Address[];
export type invoice_app_NewAddressRecord = Omit<invoice_app_Address, 'id'>;

export interface invoice_app_Invoice {
	id: string;
	createdAt?: string;
	paymentDue?: string;
	description?: string;
	paymentTerms?: number;
	clientName?: string;
	clientEmail?: string;
	status?: string;
	senderAddress?: Address;
	clientAddress?: Address;
	items?: InvoiceItem[];
	total?: number;
}

export type invoice_app_NewInvoice = Omit<invoice_app_Invoice, 'id'>;
export type { invoice_app_Invoice as invoice_app_InvoiceRecord };
export type invoice_app_InvoiceRecords = invoice_app_Invoice[];
export type invoice_app_NewInvoiceRecord = Omit<invoice_app_Invoice, 'id'>;

export interface invoice_app_InvoiceItem {
	id: string;
	name?: string;
	quantity?: number;
	price?: number;
	total?: number;
}

export type invoice_app_NewInvoiceItem = Omit<invoice_app_InvoiceItem, 'id'>;
export type { invoice_app_InvoiceItem as invoice_app_InvoiceItemRecord };
export type invoice_app_InvoiceItemRecords = invoice_app_InvoiceItem[];
export type invoice_app_NewInvoiceItemRecord = Omit<invoice_app_InvoiceItem, 'id'>;
