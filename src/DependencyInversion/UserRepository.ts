import { User } from "../SingleResponsibility/User";
import { UserQuery } from "./UserQuery";

export class UserRepository implements UserQuery {

    users: User[] = [];

    findByEmail(email: string): User | undefined {
      const user = this.users.find((u) => u.email === email);

      return user;
    }

  }