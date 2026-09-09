import type { Invoice, InvoiceFilters } from "@/features/invoices/types";

export async function getInvoices(
  filters?: InvoiceFilters,
): Promise<Invoice[]> {
  const { pageIndex = 0, pageSize = 10 } = filters || {};

  const reponse = await fetch("http://localhost:3000/invoices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pageIndex,
      pageSize,
      ...filters,
    }),
  });

  const data = await reponse.json();

  return data;
}

export function getInvoicesQueryOptions(filters?: InvoiceFilters) {
  return {
    queryKey: ["invoices", filters],
    queryFn: () => getInvoices(filters),
  };
}
