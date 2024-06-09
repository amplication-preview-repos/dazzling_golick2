import { PasswordEntry as TPasswordEntry } from "../api/passwordEntry/PasswordEntry";

export const PASSWORDENTRY_TITLE_FIELD = "username";

export const PasswordEntryTitle = (record: TPasswordEntry): string => {
  return record.username?.toString() || String(record.id);
};
