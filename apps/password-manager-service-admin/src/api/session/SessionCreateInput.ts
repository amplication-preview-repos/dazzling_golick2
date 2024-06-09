import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  expiresAt?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
