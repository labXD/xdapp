import { httpBatchLink } from "@trpc/client"
import { createTRPCNext } from "@trpc/next"

import type { AppRouter } from "../api"

export const t = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `/api/trpc`,
        }),
      ],
    }
  },
})
