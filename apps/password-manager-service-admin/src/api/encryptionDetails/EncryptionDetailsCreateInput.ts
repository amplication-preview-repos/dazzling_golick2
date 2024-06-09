import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EncryptionDetailsCreateInput = {
  algorithm?: string | null;
  key?: string | null;
  user?: UserWhereUniqueInput | null;
};
