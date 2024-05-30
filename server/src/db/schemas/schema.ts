import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    first_name: varchar('first_name', { length: 256 }),
    last_name: varchar('last_name', { length: 256 }),
});