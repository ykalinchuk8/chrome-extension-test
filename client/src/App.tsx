import {trpc} from "./trpc.ts"

function App() {
    const {
        data: users,
        isLoading,
    } = trpc.user.getUsers.useQuery();

    return (
        <div className='w-[300px] h-[300px] flex justify-center bg-gray-100 overflow-y-auto p-2'>
            {isLoading && <h1 className='self-center'>Loading...</h1>}

            {!isLoading && <ul className='p-2'>
                {(users ?? []).map((user, index) => {
                    return <li key={index} className='text-green-800'>{user.first_name + ' ' + user.last_name}</li>
                })}
            </ul>}
        </div>
    );
}

export default App
