import { useState } from "react";
import { useParams, useNavigate, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";
import arrowLeftIcon from "@/assets/icon-arrow-left.svg";
import { getInvoiceQueryOptions } from "./queries/getInvoice";
import {
  useMarkAsPaidMutation,
  useDeleteInvoiceMutation,
  useUpdateInvoiceMutation,
} from "./queries/mutations";
import { DeleteInvoiceModal } from "./components/DeleteInvoiceModal";
import { EditInvoiceDrawer } from "./components/EditInvoiceDrawer";
import type { Invoice } from "@/features/invoices/types";

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function InvoiceDetailsPage() {
  const { invoiceId = "" } = useParams({ strict: false }) as {
    invoiceId?: string;
  };
  const navigate = useNavigate();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const {
    data: invoice,
    isLoading,
    error,
  } = useQuery(getInvoiceQueryOptions(invoiceId));

  const markAsPaid = useMarkAsPaidMutation(invoiceId);
  const deleteInvoice = useDeleteInvoiceMutation(invoiceId);
  const updateInvoice = useUpdateInvoiceMutation(invoiceId);

  const handleDeleteConfirm = async () => {
    try {
      await deleteInvoice.mutateAsync();
      setIsDeleteModalOpen(false);
      navigate({ to: "/" });
    } catch (err) {
      console.error("Failed to delete invoice:", err);
    }
  };

  const handleEditSave = async (updatedData: Partial<Invoice>) => {
    try {
      await updateInvoice.mutateAsync(updatedData);
      setIsEditDrawerOpen(false);
    } catch (err) {
      console.error("Failed to update invoice:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 font-sans">
        <div className="w-24">
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="w-full h-20 rounded-[8px]" />
        <Skeleton className="w-full h-[450px] rounded-[8px]" />
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="space-y-6 font-sans text-center py-16">
        <h2 className="text-heading-m text-[#0C0E16] dark:text-white">
          Invoice Not Found
        </h2>
        <p className="text-body-1 text-[#888EB0] dark:text-[#DFE3FA]">
          The invoice with ID #{invoiceId} could not be found.
        </p>
        <div>
          <Link to="/">
            <Button variant="primary">Return to Invoices</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isPaid = invoice.status?.toLowerCase() === "paid";

  return (
    <div className="font-sans pb-28 sm:pb-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-6 group cursor-pointer"
        >
          <img
            src={arrowLeftIcon}
            alt=""
            className="w-2 h-2.5 transition-transform group-hover:-translate-x-1"
          />
          <span className="font-bold text-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white group-hover:text-[#7E88C3] transition-colors">
            Go back
          </span>
        </Link>
      </div>

      {/* Top Status Card */}
      <section className="bg-white dark:bg-[#1E2139] rounded-[8px] p-6 sm:px-8 sm:py-5 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4 sm:gap-5">
            <span className="text-body-1 text-[#858BB2] dark:text-[#DFE3FA]">
              Status
            </span>
            <StatusBadge status={invoice.status} />
          </div>

          {/* Desktop / Tablet Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setIsEditDrawerOpen(true)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              Delete
            </Button>
            {!isPaid && (
              <Button
                type="button"
                variant="primary"
                onClick={() => markAsPaid.mutate()}
                disabled={markAsPaid.isPending}
              >
                {markAsPaid.isPending ? "Updating..." : "Mark as Paid"}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Invoice Card */}
      <section className="bg-white dark:bg-[#1E2139] rounded-[8px] p-6 sm:p-12 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] mt-4 sm:mt-6 transition-colors">
        {/* Header: ID, Description, Sender Address */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-8 sm:mb-12">
          <div>
            <h2 className="text-heading-s sm:text-heading-m font-bold text-[#0C0E16] dark:text-white">
              <span className="text-[#7E88C3]">#</span>
              {invoice.id}
            </h2>
            <p className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] mt-1 sm:mt-2">
              {invoice.description}
            </p>
          </div>

          <div className="text-body-2 text-[#7E88C3] dark:text-[#DFE3FA] leading-[18px] sm:text-right">
            <div>{invoice.senderAddress?.street}</div>
            <div>{invoice.senderAddress?.city}</div>
            <div>{invoice.senderAddress?.postCode}</div>
            <div>{invoice.senderAddress?.country}</div>
          </div>
        </div>

        {/* Details Grid: Dates, Bill To, Sent To */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Column 1: Dates */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] mb-3">
                Invoice Date
              </p>
              <p className="text-heading-s text-[#0C0E16] dark:text-white font-bold">
                {formatDate(invoice.createdAt)}
              </p>
            </div>
            <div className="mt-8">
              <p className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] mb-3">
                Payment Due
              </p>
              <p className="text-heading-s text-[#0C0E16] dark:text-white font-bold">
                {formatDate(invoice.paymentDue)}
              </p>
            </div>
          </div>

          {/* Column 2: Bill To */}
          <div>
            <p className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] mb-3">
              Bill To
            </p>
            <p className="text-heading-s text-[#0C0E16] dark:text-white font-bold mb-2">
              {invoice.clientName}
            </p>
            <div className="text-body-2 text-[#7E88C3] dark:text-[#DFE3FA] leading-[18px]">
              <div>{invoice.clientAddress?.street}</div>
              <div>{invoice.clientAddress?.city}</div>
              <div>{invoice.clientAddress?.postCode}</div>
              <div>{invoice.clientAddress?.country}</div>
            </div>
          </div>

          {/* Column 3: Sent To */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] mb-3">
              Sent to
            </p>
            <p className="text-heading-s text-[#0C0E16] dark:text-white font-bold break-all">
              {invoice.clientEmail}
            </p>
          </div>
        </div>

        {/* Line Items & Grand Total */}
        <div className="rounded-[8px] overflow-hidden bg-[#F9FAFE] dark:bg-[#252945] transition-colors">
          {/* Desktop Table View */}
          <div className="hidden sm:block p-8">
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] text-body-2 text-[#7E88C3] dark:text-[#DFE3FA] mb-8">
              <span>Item Name</span>
              <span className="text-center">QTY.</span>
              <span className="text-right">Price</span>
              <span className="text-right">Total</span>
            </div>

            <div className="space-y-6">
              {(invoice.items || []).map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center"
                >
                  <span className="font-bold text-heading-s text-[#0C0E16] dark:text-white">
                    {item.name}
                  </span>
                  <span className="font-bold text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] text-center">
                    {item.quantity}
                  </span>
                  <span className="font-bold text-body-1 text-[#7E88C3] dark:text-[#DFE3FA] text-right">
                    £{Number(item.price || 0).toFixed(2)}
                  </span>
                  <span className="font-bold text-heading-s text-[#0C0E16] dark:text-white text-right">
                    £{Number(item.total || 0).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile List View */}
          <div className="sm:hidden p-6 space-y-6">
            {(invoice.items || []).map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-heading-s text-[#0C0E16] dark:text-white">
                    {item.name}
                  </p>
                  <p className="font-bold text-body-1 text-[#7E88C3] dark:text-[#888EB0] mt-1">
                    {item.quantity} x £{Number(item.price || 0).toFixed(2)}
                  </p>
                </div>
                <p className="font-bold text-heading-s text-[#0C0E16] dark:text-white">
                  £{Number(item.total || 0).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Grand Total Bar */}
          <div className="bg-[#373B53] dark:bg-[#0C0E16] p-6 sm:p-8 flex items-center justify-between text-white transition-colors">
            <span className="text-body-2 text-white">Amount Due</span>
            <span className="text-heading-m sm:text-heading-l font-bold text-white">
              £
              {Number(invoice.total || 0).toLocaleString("en-GB", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-6 bg-white dark:bg-[#1E2139] flex items-center justify-end gap-2 z-30 shadow-[0_-10px_10px_-10px_rgba(72,84,159,0.10)] border-t border-[#DFE3FA]/20">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIsEditDrawerOpen(true)}
        >
          Edit
        </Button>
        <Button
          type="button"
          variant="destructive"
          onClick={() => setIsDeleteModalOpen(true)}
        >
          Delete
        </Button>
        {!isPaid && (
          <Button
            type="button"
            variant="primary"
            onClick={() => markAsPaid.mutate()}
            disabled={markAsPaid.isPending}
          >
            {markAsPaid.isPending ? "Updating..." : "Mark as Paid"}
          </Button>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteInvoiceModal
        isOpen={isDeleteModalOpen}
        invoiceId={invoice.id}
        isDeleting={deleteInvoice.isPending}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />

      {/* Edit Invoice Drawer */}
      <EditInvoiceDrawer
        invoice={invoice}
        isOpen={isEditDrawerOpen}
        isSaving={updateInvoice.isPending}
        onClose={() => setIsEditDrawerOpen(false)}
        onSave={handleEditSave}
      />
    </div>
  );
}
