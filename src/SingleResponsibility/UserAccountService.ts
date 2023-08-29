import { AccountType, User } from "./User";

export class UserAccountService {

    createUser(name: string, email: string, password: string, accountType: AccountType): User {
        return new User(name, email, password, accountType);
    }

    login(user: User, password: string) { 
        console.log(`Logging in ${user.generateSlug()} with password ${password}`);
    }
}