import { databases, tables } from "harper";

const BaseTable =
  databases?.invoice_app?.Invoice ?? tables?.Invoice ?? class {};

export class Invoice extends BaseTable {
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
}
