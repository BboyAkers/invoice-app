import { useNewRouter } from "@/router/useNewRouter";
import { RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export function AppRouted() {
  const router = useNewRouter();

  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </>
  );
}
