import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import type { Invoice, InvoiceItem } from "@/features/invoices/types";
import deleteIcon from "@/assets/icon-delete.svg";
import plusIcon from "@/assets/icon-plus.svg";

interface EditInvoiceDrawerProps {
  invoice: Invoice;
  isOpen: boolean;
  isSaving: boolean;
  onClose: () => void;
  onSave: (updatedData: Partial<Invoice>) => void;
}

export function EditInvoiceDrawer({
  invoice,
  isOpen,
  isSaving,
  onClose,
  onSave,
}: EditInvoiceDrawerProps) {
  const [formData, setFormData] = useState<Invoice>({ ...invoice });

  if (!isOpen) return null;

  const handleSenderChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      senderAddress: { ...prev.senderAddress, [field]: value },
    }));
  };

  const handleClientChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      clientAddress: { ...prev.clientAddress, [field]: value },
    }));
  };

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number,
  ) => {
    setFormData((prev) => {
      const items = [...(prev.items || [])];
      const item = { ...items[index] };

      if (field === "quantity") {
        const qty = Number(value) || 0;
        item.quantity = qty;
        item.total = Number((qty * (item.price || 0)).toFixed(2));
      } else if (field === "price") {
        const price = Number(value) || 0;
        item.price = price;
        item.total = Number(((item.quantity || 0) * price).toFixed(2));
      } else {
        // name
        item.name = String(value);
      }

      items[index] = item;
      const total = items.reduce((acc, curr) => acc + (curr.total || 0), 0);
      return { ...prev, items, total: Number(total.toFixed(2)) };
    });
  };

  const handleAddItem = () => {
    setFormData((prev) => {
      const items = [...(prev.items || [])];
      items.push({ name: "", quantity: 1, price: 0, total: 0 });
      return { ...prev, items };
    });
  };

  const handleRemoveItem = (index: number) => {
    setFormData((prev) => {
      const items = (prev.items || []).filter((_, i) => i !== index);
      const total = items.reduce((acc, curr) => acc + (curr.total || 0), 0);
      return { ...prev, items, total: Number(total.toFixed(2)) };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="fixed top-0 left-0 lg:left-[103px] bottom-0 w-full max-w-[620px] bg-white dark:bg-[#141625] z-50 overflow-y-auto shadow-2xl transition-transform animate-in slide-in-from-left duration-300">
        <form onSubmit={handleSubmit} className="p-8 sm:p-14 space-y-8">
          <h2 className="text-heading-m text-[#0C0E16] dark:text-white font-bold">
            Edit <span className="text-[#7E88C3]">#</span>
            {invoice.id}
          </h2>

          {/* Bill From */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill From</h3>
            <Input
              label="Street Address"
              value={formData.senderAddress?.street || ""}
              onChange={(e) => handleSenderChange("street", e.target.value)}
              required
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Input
                label="City"
                value={formData.senderAddress?.city || ""}
                onChange={(e) => handleSenderChange("city", e.target.value)}
                required
              />
              <Input
                label="Post Code"
                value={formData.senderAddress?.postCode || ""}
                onChange={(e) => handleSenderChange("postCode", e.target.value)}
                required
              />
              <div className="col-span-2 sm:col-span-1">
                <Input
                  label="Country"
                  value={formData.senderAddress?.country || ""}
                  onChange={(e) => handleSenderChange("country", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Bill To */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill To</h3>
            <Input
              label="Client's Name"
              value={formData.clientName || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, clientName: e.target.value }))
              }
              required
            />
            <Input
              label="Client's Email"
              type="email"
              value={formData.clientEmail || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, clientEmail: e.target.value }))
              }
              required
            />
            <Input
              label="Street Address"
              value={formData.clientAddress?.street || ""}
              onChange={(e) => handleClientChange("street", e.target.value)}
              required
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Input
                label="City"
                value={formData.clientAddress?.city || ""}
                onChange={(e) => handleClientChange("city", e.target.value)}
                required
              />
              <Input
                label="Post Code"
                value={formData.clientAddress?.postCode || ""}
                onChange={(e) => handleClientChange("postCode", e.target.value)}
                required
              />
              <div className="col-span-2 sm:col-span-1">
                <Input
                  label="Country"
                  value={formData.clientAddress?.country || ""}
                  onChange={(e) => handleClientChange("country", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Invoice Date"
                type="date"
                value={formData.createdAt || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    createdAt: e.target.value,
                  }))
                }
                required
              />
              <Input
                label="Payment Due"
                type="date"
                value={formData.paymentDue || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    paymentDue: e.target.value,
                  }))
                }
                required
              />
            </div>
            <Input
              label="Project Description"
              value={formData.description || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>

          {/* Item List */}
          <div className="space-y-4">
            <h3 className="text-heading-s font-bold text-[#777F98]">Item List</h3>

            <div className="space-y-4">
              {(formData.items || []).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <div className="flex-1 w-full">
                    <Input
                      label={index === 0 ? "Item Name" : undefined}
                      value={item.name}
                      onChange={(e) =>
                        handleItemChange(index, "name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="w-20">
                    <Input
                      label={index === 0 ? "Qty." : undefined}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(index, "quantity", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="w-28">
                    <Input
                      label={index === 0 ? "Price" : undefined}
                      type="number"
                      step="0.01"
                      min="0"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(index, "price", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="w-24 text-right pt-2 sm:pt-0">
                    {index === 0 && (
                      <span className="block text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA] mb-2 sm:mb-4">
                        Total
                      </span>
                    )}
                    <span className="font-bold text-[15px] text-[#888EB0] dark:text-[#DFE3FA]">
                      £{(item.total || 0).toFixed(2)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className={`p-2 hover:opacity-75 transition-opacity cursor-pointer text-[#888EB0] hover:text-[#EC5757] ${index === 0 ? "sm:mt-6" : ""
                      }`}
                    title="Delete Item"
                  >
                    <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="addItem"
              onClick={handleAddItem}
              className="w-full mt-2"
            >
              <img src={plusIcon} alt="" className="w-2.5 h-2.5 mr-2" />
              Add New Item
            </Button>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-[#DFE3FA] dark:border-[#252945]">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
