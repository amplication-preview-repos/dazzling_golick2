import { SortOrder } from "../../util/SortOrder";

export type PasswordEntryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  password?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
