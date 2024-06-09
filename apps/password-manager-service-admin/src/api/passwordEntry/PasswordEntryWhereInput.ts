import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PasswordEntryWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  password?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  username?: StringNullableFilter;
};
