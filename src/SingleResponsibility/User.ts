import { kebabCase } from "lodash";

export class User {

    constructor(
        private name: string,
        private email: string,
        private password: string
    ) { }

    generateSlug(): string {
        return kebabCase(this.name);
    }
}