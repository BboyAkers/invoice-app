import type { Invoice, InvoiceFilters } from "@/features/invoices/types";

export async function getInvoices(
  _filters?: InvoiceFilters,
): Promise<Invoice[]> {
  const response = await fetch("/InvoiceResource/");

  const data = await response.json();

  return data;
}

export function getInvoicesQueryOptions(filters?: InvoiceFilters) {
  return {
    queryKey: ["invoices", filters],
    queryFn: () => getInvoices(filters),
  };
}
