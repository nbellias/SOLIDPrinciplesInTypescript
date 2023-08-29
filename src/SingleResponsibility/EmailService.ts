import { User } from "./User";

export class EmailService {
    sendEmailToUser(user: User, template: string) { 
        console.log(`Sending email to ${user.generateSlug()} with template ${template}`);
    }
}