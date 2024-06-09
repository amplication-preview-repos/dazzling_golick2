import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EncryptionDetailsWhereInput = {
  algorithm?: StringNullableFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
