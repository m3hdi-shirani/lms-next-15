import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      debugger;
      //show notification
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      //show notification
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});
