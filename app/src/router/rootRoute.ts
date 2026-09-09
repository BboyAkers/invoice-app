import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

export const rootRoute = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Outlet,
})
