import { EncryptionDetailsWhereInput } from "./EncryptionDetailsWhereInput";
import { EncryptionDetailsOrderByInput } from "./EncryptionDetailsOrderByInput";

export type EncryptionDetailsFindManyArgs = {
  where?: EncryptionDetailsWhereInput;
  orderBy?: Array<EncryptionDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
