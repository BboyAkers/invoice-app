import { databases, Resource, tables, transaction } from "harper";
import { readFileSync } from "node:fs";
import { join } from "node:path";

let isSeeding = false;

function getInvoiceTable() {
  return databases?.invoice_app?.Invoice ?? tables?.Invoice;
}

export async function seedInvoices(force = false) {
  if (isSeeding) return { success: true, count: 0, busy: true };
  isSeeding = true;
  try {
    const InvoiceTable = getInvoiceTable();
    if (!InvoiceTable) {
      console.warn(
        "[Seed] Invoice table not found in databases.invoice_app or tables",
      );
      return { success: false, count: 0 };
    }

    if (!force) {
      for await (const _ of InvoiceTable.search({ limit: 1 })) {
        return { success: true, count: 0, skipped: true };
      }
    }

    const jsonPath = join(import.meta.dirname, "../src/data/invoices.json");
    const invoices = JSON.parse(readFileSync(jsonPath, "utf8"));

    await transaction(async (txn) => {
      for (const invoice of invoices) {
        await InvoiceTable.put(invoice, txn);
      }
    });

    console.log(
      `[Seed] Seeded ${invoices.length} invoices into database "invoice_app"`,
    );
    return { success: true, count: invoices.length };
  } catch (err) {
    console.error("[Seed] Error seeding invoices:", err);
    throw err;
  } finally {
    isSeeding = false;
  }
}

// Seed on startup asynchronously without blocking event queue
setTimeout(() => {
  seedInvoices().catch((err) => {
    console.error("[Seed] Startup seed error:", err);
  });
}, 200);

export class Seed extends Resource {
  allowRead() {
    return true;
  }
  allowCreate() {
    return true;
  }
  async get() {
    const result = await seedInvoices(true);
    const InvoiceTable = getInvoiceTable();
    const records: any[] = [];
    if (InvoiceTable) {
      for await (const inv of InvoiceTable.search()) {
        records.push({
          id: inv.id,
          clientName: inv.clientName,
          total: inv.total,
          status: inv.status,
        });
      }
    }
    return {
      success: true,
      count: records.length,
      message: `Seeded ${result.count} records into invoice_app database`,
      invoices: records,
    };
  }
}
