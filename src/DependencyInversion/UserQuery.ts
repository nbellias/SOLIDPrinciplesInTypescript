import { User } from "../SingleResponsibility/User";

export interface UserQuery {
    findByEmail(email: string): User | undefined;
}