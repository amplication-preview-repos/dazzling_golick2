import { User } from "../user/User";

export type EncryptionDetails = {
  algorithm: string | null;
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  user?: User | null;
};
