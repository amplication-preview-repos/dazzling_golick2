import { EncryptionDetailsUpdateManyWithoutUsersInput } from "./EncryptionDetailsUpdateManyWithoutUsersInput";
import { PasswordEntryUpdateManyWithoutUsersInput } from "./PasswordEntryUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  encryptionDetailsItems?: EncryptionDetailsUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  passwordEntries?: PasswordEntryUpdateManyWithoutUsersInput;
  passwordHash?: string | null;
  roles?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
  username?: string;
};
