import { dashboardLayout } from "@/router/dashboardRoute";
import { createRoute } from "@tanstack/react-router";
import { InvoiceDetailsPage } from "./InvoiceDetailsPage";

export const invoiceDetailsRoute = createRoute({
  getParentRoute: () => dashboardLayout,
  path: "$invoiceId",
  component: InvoiceDetailsPage,
});

export const invoiceDetailsRoutes = [invoiceDetailsRoute];
