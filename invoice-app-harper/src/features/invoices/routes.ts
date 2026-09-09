import { dashboardLayout } from "@/router/dashboardRoute";
import { createRoute } from "@tanstack/react-router";
import { InvoicesPage } from "@/features/invoices/InvoicesPage";

export const invoicesRoute = createRoute({
  getParentRoute: () => dashboardLayout,
  path: "/",
  component: InvoicesPage,
});

export const invoiceRoutes = [invoicesRoute];
