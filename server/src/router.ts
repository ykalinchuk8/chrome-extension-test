import { router } from './trpc'
import userRouter from './routers/user'

const appRouter = router({
    user: userRouter,
})

export default appRouter