import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Invoice } from "@/features/invoices/types";

export function useMarkAsPaidMutation(invoiceId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`/InvoiceResource/${invoiceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "paid" }),
      });
      if (!response.ok) {
        throw new Error("Failed to mark invoice as paid");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoice", invoiceId] });
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
}

export function useDeleteInvoiceMutation(invoiceId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`/InvoiceResource/${invoiceId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete invoice");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.removeQueries({ queryKey: ["invoice", invoiceId] });
    },
  });
}

export function useUpdateInvoiceMutation(invoiceId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedData: Partial<Invoice>) => {
      const response = await fetch(`/InvoiceResource/${invoiceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Failed to update invoice");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoice", invoiceId] });
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
}
