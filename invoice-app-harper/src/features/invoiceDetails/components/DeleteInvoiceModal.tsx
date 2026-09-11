import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteInvoiceModalProps {
  isOpen: boolean;
  invoiceId: string;
  isDeleting: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteInvoiceModal({
  isOpen,
  invoiceId,
  isDeleting,
  onClose,
  onConfirm,
}: DeleteInvoiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="bg-white dark:bg-[#1E2139] p-8 sm:p-12 rounded-[8px] max-w-[480px] border-none shadow-2xl gap-0 outline-none"
      >
        <DialogHeader className="gap-0">
          <DialogTitle className="text-heading-m font-bold text-[#0C0E16] dark:text-white mb-3">
            Confirm Deletion
          </DialogTitle>
          <DialogDescription className="text-body-1 text-[#888EB0] dark:text-[#DFE3FA] leading-relaxed mb-4">
            Are you sure you want to delete invoice #{invoiceId}? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

