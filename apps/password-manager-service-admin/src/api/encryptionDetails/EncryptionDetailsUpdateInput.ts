import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EncryptionDetailsUpdateInput = {
  algorithm?: string | null;
  key?: string | null;
  user?: UserWhereUniqueInput | null;
};
