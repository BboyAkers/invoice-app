/**
 Generated from your schema files
 Manual changes will be lost!
 > harper dev .
 */
import type { Table } from 'harper';
import type { invoice_app_Address, invoice_app_Invoice, invoice_app_InvoiceItem } from './types.ts';

declare module 'harper' {
	export const tables: {
	};

	export const databases: {
		invoice_app: {
			Address: { new(...args: any[]): Table<invoice_app_Address> };
			Invoice: { new(...args: any[]): Table<invoice_app_Invoice> };
			InvoiceItem: { new(...args: any[]): Table<invoice_app_InvoiceItem> };
		};
	};
}
