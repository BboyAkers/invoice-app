import { DashboardLayout } from "@/features/layouts/DashboardLayout";
import { rootRoute } from "@/router/rootRoute";
import { createRoute } from "@tanstack/react-router";

export const dashboardLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: "_dashboardLayout",
  component: DashboardLayout,
});
