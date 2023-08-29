import { User, AccountType } from "../SingleResponsibility/User";

type Voucher = string;

const userTypeToVoucherMap: Record<AccountType, Voucher> = {
    Normal: "10% discount",
    Premium: "15% discount",
    Ultimate: "20% discount",
};

export class VoucherService {
    getVoucher(user: User): string {
        return userTypeToVoucherMap[user.getAccountType()];
    }
}