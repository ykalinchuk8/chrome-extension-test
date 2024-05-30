import { router, publicProcedure } from '../trpc'
import UserRepository from "../db/repositories/UserRepository";

const userRouter = router({
    getUsers: publicProcedure.query(() => {
        const userRepository = new UserRepository();
        return userRepository.getAll();
    }),
})

export default userRouter