import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
