import { EncryptionDetails } from "../encryptionDetails/EncryptionDetails";
import { PasswordEntry } from "../passwordEntry/PasswordEntry";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  createdAt: Date;
  email: string | null;
  encryptionDetailsItems?: Array<EncryptionDetails>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  passwordEntries?: Array<PasswordEntry>;
  passwordHash: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  username: string;
};
