import { EmailService } from "./SingleResponsibility/EmailService";
import { User } from "./SingleResponsibility/User";
import { UserAccountService } from "./SingleResponsibility/UserAccountService";

const userAccountService = new UserAccountService();
const emailService = new EmailService();
const user: User = userAccountService.createUser("John Doe", "john.doe@example.com", "pass12345");
userAccountService.login(user, "pass12345");
emailService.sendEmailToUser(user, "Welcome to our platform!");