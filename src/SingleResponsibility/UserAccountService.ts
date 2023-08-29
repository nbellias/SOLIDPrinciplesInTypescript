import { User } from "./User";

export class UserAccountService {

    createUser(name: string, email: string, password: string): User {
        return new User(name, email, password);
    }

    login(user: User, password: string) { 
        console.log(`Logging in ${user.generateSlug()} with password ${password}`);
    }
}