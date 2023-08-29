import { kebabCase } from "lodash";

export type AccountType = "Normal" | "Premium" | "Ultimate";

export class User {

    constructor(
        private name: string,
        public email: string,
        private password: string,
        private accountType: AccountType = "Normal"
    ) { }

    generateSlug(): string {
        return kebabCase(this.name);
    }

    getAccountType(): AccountType {
        return this.accountType;
    }
}