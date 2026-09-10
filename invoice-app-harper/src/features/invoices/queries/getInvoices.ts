import type { Invoice, InvoiceFilters } from "@/features/invoices/types";

export async function getInvoices(
  filters?: InvoiceFilters,
): Promise<Invoice[]> {

  const reponse = await fetch("/InvoiceResource/");

  const data = await reponse.json();

  return data;
}

export function getInvoicesQueryOptions(filters?: InvoiceFilters) {
  return {
    queryKey: ["invoices", filters],
    queryFn: () => getInvoices(filters),
  };
}
