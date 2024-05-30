import {db} from '../db';

export default class UserRepository {
    public async getAll() {
        return db.query.users.findMany();
    }
}