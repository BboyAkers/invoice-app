import { queryClient } from '@/react-query/queryClient'
import { rootRouteTree } from '@/router/rootRouteTree'
import { createRouter } from '@tanstack/react-router'
import { useState } from 'react'

export function useNewRouter({
  routeTree = rootRouteTree,
}: {
  routeTree?: typeof rootRouteTree
} = {}) {
  const [router] = useState(() =>
    createRouter({
      routeTree,
      defaultPreload: 'intent',
      trailingSlash: 'never',
      defaultPreloadStaleTime: 0,
      scrollRestoration: true,
      context: {
        queryClient,
      },
    })
  )
  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof useNewRouter>
  }
}
