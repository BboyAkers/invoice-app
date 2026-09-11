import { databases, Resource, tables } from "harper";

const { Invoice } = tables;

export class InvoiceResource extends Resource {
  allowRead() {
    return true;
  }
  allowCreate() {
    return true;
  }
  allowUpdate() {
    return true;
  }
  allowDelete() {
    return true;
  }

  async get(target?: any) {
    const invoices = await Invoice.get(target);
    return invoices;
  }

  async put(target?: any, data?: any) {
    const resolvedData = await data;
    return Invoice.put(resolvedData);
  }

  async patch(target?: any, data?: any) {
    const resolvedData = await data;
    const id = target?.id ?? (typeof target === "string" ? target : undefined);
    return Invoice.patch(id ? { id, ...resolvedData } : resolvedData);
  }

  async delete(target?: any) {
    const id = target?.id ?? (typeof target === "string" ? target : target);
    return Invoice.delete(id);
  }

}
