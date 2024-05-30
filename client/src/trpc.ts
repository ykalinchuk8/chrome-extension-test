import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import { AppRouter } from '../../server/src'

export const trpc = createTRPCReact<AppRouter>()

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: import.meta.env.VITE_API_URL + '/trpc',
        }),
    ],
})