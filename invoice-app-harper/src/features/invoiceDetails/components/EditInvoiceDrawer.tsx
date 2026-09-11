import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import type { Invoice } from "@/features/invoices/types";
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
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Invoice>({
    defaultValues: invoice,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchedItems = watch("items");

  useEffect(() => {
    if (isOpen) {
      reset(invoice);
    }
  }, [isOpen, invoice, reset]);

  if (!isOpen) return null;

  const onSubmit = (data: Invoice) => {
    const updatedItems = (data.items || []).map((item) => {
      const qty = Number(item.quantity) || 0;
      const price = Number(item.price) || 0;
      return {
        ...item,
        quantity: qty,
        price,
        total: Number((qty * price).toFixed(2)),
      };
    });

    const total = updatedItems.reduce(
      (acc, item) => acc + (item.total || 0),
      0,
    );

    onSave({
      ...data,
      items: updatedItems,
      total: Number(total.toFixed(2)),
    });
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 sm:p-14 space-y-8"
        >
          <h2 className="text-heading-m text-[#0C0E16] dark:text-white font-bold">
            Edit <span className="text-[#7E88C3]">#</span>
            {invoice.id}
          </h2>

          {/* Bill From */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill From</h3>
            <Input
              label="Street Address"
              error={errors.senderAddress?.street?.message}
              {...register("senderAddress.street", {
                required: "can't be empty",
              })}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Input
                label="City"
                error={errors.senderAddress?.city?.message}
                {...register("senderAddress.city", {
                  required: "can't be empty",
                })}
              />
              <Input
                label="Post Code"
                error={errors.senderAddress?.postCode?.message}
                {...register("senderAddress.postCode", {
                  required: "can't be empty",
                })}
              />
              <div className="col-span-2 sm:col-span-1">
                <Input
                  label="Country"
                  error={errors.senderAddress?.country?.message}
                  {...register("senderAddress.country", {
                    required: "can't be empty",
                  })}
                />
              </div>
            </div>
          </div>

          {/* Bill To */}
          <div className="space-y-4">
            <h3 className="text-[15px] font-bold text-[#7C5DFA]">Bill To</h3>
            <Input
              label="Client's Name"
              error={errors.clientName?.message}
              {...register("clientName", {
                required: "can't be empty",
              })}
            />
            <Input
              label="Client's Email"
              type="email"
              error={errors.clientEmail?.message}
              {...register("clientEmail", {
                required: "can't be empty",
              })}
            />
            <Input
              label="Street Address"
              error={errors.clientAddress?.street?.message}
              {...register("clientAddress.street", {
                required: "can't be empty",
              })}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Input
                label="City"
                error={errors.clientAddress?.city?.message}
                {...register("clientAddress.city", {
                  required: "can't be empty",
                })}
              />
              <Input
                label="Post Code"
                error={errors.clientAddress?.postCode?.message}
                {...register("clientAddress.postCode", {
                  required: "can't be empty",
                })}
              />
              <div className="col-span-2 sm:col-span-1">
                <Input
                  label="Country"
                  error={errors.clientAddress?.country?.message}
                  {...register("clientAddress.country", {
                    required: "can't be empty",
                  })}
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
                error={errors.createdAt?.message}
                {...register("createdAt", {
                  required: "can't be empty",
                })}
              />
              <Input
                label="Payment Due"
                type="date"
                error={errors.paymentDue?.message}
                {...register("paymentDue", {
                  required: "can't be empty",
                })}
              />
            </div>
            <Input
              label="Project Description"
              error={errors.description?.message}
              {...register("description", {
                required: "can't be empty",
              })}
            />
          </div>

          {/* Item List */}
          <div className="space-y-4">
            <h3 className="text-heading-s font-bold text-[#777F98]">
              Item List
            </h3>

            <div className="space-y-4">
              {fields.map((field, index) => {
                const qty = Number(watchedItems?.[index]?.quantity) || 0;
                const price = Number(watchedItems?.[index]?.price) || 0;
                const rowTotal = (qty * price).toFixed(2);

                return (
                  <div
                    key={field.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <div className="flex-1 w-full">
                      <Input
                        label={index === 0 ? "Item Name" : undefined}
                        error={errors.items?.[index]?.name?.message}
                        {...register(`items.${index}.name`, {
                          required: "can't be empty",
                        })}
                      />
                    </div>
                    <div className="w-20">
                      <Input
                        label={index === 0 ? "Qty." : undefined}
                        type="number"
                        min="1"
                        {...register(`items.${index}.quantity`, {
                          valueAsNumber: true,
                          required: true,
                          min: 1,
                        })}
                      />
                    </div>
                    <div className="w-28">
                      <Input
                        label={index === 0 ? "Price" : undefined}
                        type="number"
                        step="0.01"
                        min="0"
                        {...register(`items.${index}.price`, {
                          valueAsNumber: true,
                          required: true,
                          min: 0,
                        })}
                      />
                    </div>
                    <div className="w-24 text-right pt-2 sm:pt-0">
                      {index === 0 && (
                        <span className="block text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA] mb-2 sm:mb-4">
                          Total
                        </span>
                      )}
                      <span className="font-bold text-[15px] text-[#888EB0] dark:text-[#DFE3FA]">
                        £{rowTotal}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className={`p-2 hover:opacity-75 transition-opacity cursor-pointer text-[#888EB0] hover:text-[#EC5757] ${
                        index === 0 ? "sm:mt-6" : ""
                      }`}
                      title="Delete Item"
                    >
                      <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <Button
              type="button"
              variant="addItem"
              onClick={() =>
                append({ name: "", quantity: 1, price: 0, total: 0 })
              }
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
