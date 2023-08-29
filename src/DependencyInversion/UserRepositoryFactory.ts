import { UserRepository } from "./UserRepository";

export class UserRepositoryFactory {
    static getInstance(): UserRepository {
        return new UserRepository();
    }
}