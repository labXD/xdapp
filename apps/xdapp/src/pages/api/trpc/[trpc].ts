import * as trpcNext from "@trpc/server/adapters/next"

import { appRouter } from "../../../modules/trpc/api"

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
