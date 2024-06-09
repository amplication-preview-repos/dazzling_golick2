import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EncryptionDetailsListRelationFilter } from "../encryptionDetails/EncryptionDetailsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PasswordEntryListRelationFilter } from "../passwordEntry/PasswordEntryListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  encryptionDetailsItems?: EncryptionDetailsListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  passwordEntries?: PasswordEntryListRelationFilter;
  passwordHash?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  username?: StringFilter;
};
