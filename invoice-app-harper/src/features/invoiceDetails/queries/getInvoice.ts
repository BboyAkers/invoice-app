import type { Invoice } from "@/features/invoices/types";

export async function getInvoice(id: string): Promise<Invoice> {
  const response = await fetch(`/InvoiceResource/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch invoice ${id}: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

export function getInvoiceQueryOptions(id: string) {
  return {
    queryKey: ["invoice", id],
    queryFn: () => getInvoice(id),
    enabled: Boolean(id),
  };
}
