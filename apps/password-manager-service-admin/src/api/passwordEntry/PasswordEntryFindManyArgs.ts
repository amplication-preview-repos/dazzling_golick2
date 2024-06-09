import { PasswordEntryWhereInput } from "./PasswordEntryWhereInput";
import { PasswordEntryOrderByInput } from "./PasswordEntryOrderByInput";

export type PasswordEntryFindManyArgs = {
  where?: PasswordEntryWhereInput;
  orderBy?: Array<PasswordEntryOrderByInput>;
  skip?: number;
  take?: number;
};
