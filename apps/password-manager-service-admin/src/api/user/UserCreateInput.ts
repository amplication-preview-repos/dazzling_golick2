import { EncryptionDetailsCreateNestedManyWithoutUsersInput } from "./EncryptionDetailsCreateNestedManyWithoutUsersInput";
import { PasswordEntryCreateNestedManyWithoutUsersInput } from "./PasswordEntryCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  encryptionDetailsItems?: EncryptionDetailsCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  passwordEntries?: PasswordEntryCreateNestedManyWithoutUsersInput;
  passwordHash?: string | null;
  roles: InputJsonValue;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  username: string;
};
