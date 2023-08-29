import { UserRepository } from "./DependencyInversion/UserRepository";
import { Stack } from "./LiskovSubstitution/Stack";
import { VoucherService } from "./OpenClosed/VoucherService";
import { EmailService } from "./SingleResponsibility/EmailService";
import { User } from "./SingleResponsibility/User";
import { UserAccountService } from "./SingleResponsibility/UserAccountService";


const userRepository = new UserRepository();

// Single Responsibility Principle
const userAccountService = new UserAccountService();
const emailService = new EmailService();
const user: User = userAccountService.createUser("John Doe", "john.doe@example.com", "pass12345", "Premium");
userAccountService.login(user, "pass12345");
emailService.sendEmailToUser(user, "Welcome to our platform!");

// Open/Closed Principle
const voucherService = new VoucherService();
console.log(`User ${user.generateSlug()} deserves ${voucherService.getVoucher(user)}`);

// Liskov Substitution Principle
const userStack = new Stack<User>();
userStack.push(user);
console.log(`User ${userStack.pop()?.generateSlug()} popped from the stack`);

// Dependency Inversion Principle
userRepository.users.push(user);
const user1: User = userAccountService.createUser("Mary Stringent", "mary.stringent@example.com", "pass12345", "Normal");
userRepository.users.push(user1);
const user2: User = userAccountService.createUser("Niko Bellias", "niko.bellias@exmaple.com", "pass12345", "Ultimate");
userRepository.users.push(user2);
console.log(`User ${userRepository.findByEmail("niko.bellias@exmaple.com")?.generateSlug()} found by email`);