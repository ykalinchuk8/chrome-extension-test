import 'dotenv/config';
import { db } from './db';
import {users as usersTable} from "./schemas/schema";
import UserRepository from "./repositories/UserRepository";

const users = [
    {
        first_name: 'John',
        last_name: 'Smith'
    },
    {
        first_name: 'John',
        last_name: 'Smith 1'
    },
    {
        first_name: 'John',
        last_name: 'Smith 2'
    },
    {
        first_name: 'John',
        last_name: 'Smith 3'
    },
    {
        first_name: 'John',
        last_name: 'Smith 4'
    },
    {
        first_name: 'John',
        last_name: 'Smith 5'
    },
    {
        first_name: 'John',
        last_name: 'Smith 6'
    },
];

await db.insert(usersTable).values(users);