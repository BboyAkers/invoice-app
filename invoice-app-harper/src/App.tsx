import { AppRouted } from "@/AppRouted";
import { queryClient } from "@/react-query/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouted />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default App;
