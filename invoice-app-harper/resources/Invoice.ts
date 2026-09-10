import { databases, Resource, tables } from "harper";

const { Invoice } = tables;

export class InvoiceResource extends Resource {
  allowRead() {
    return true;
  }
  allowCreate() {
    return true;
  }

  async get(target?: any) {
    const invoices = await Invoice.get(target);
    return invoices;
  }
}
