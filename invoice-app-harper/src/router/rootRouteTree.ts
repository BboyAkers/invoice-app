import { invoiceDetailsRoutes } from "@/features/invoiceDetails/routes";
import { invoiceRoutes } from "@/features/invoices/routes";
import { dashboardLayout } from "@/router/dashboardRoute";
import { rootRoute } from "@/router/rootRoute";

export const rootRouteTree = rootRoute.addChildren([
  dashboardLayout.addChildren([...invoiceRoutes, ...invoiceDetailsRoutes]),
]);
