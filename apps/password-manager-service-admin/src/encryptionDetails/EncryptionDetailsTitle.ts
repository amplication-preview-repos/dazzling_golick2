import { EncryptionDetails as TEncryptionDetails } from "../api/encryptionDetails/EncryptionDetails";

export const ENCRYPTIONDETAILS_TITLE_FIELD = "algorithm";

export const EncryptionDetailsTitle = (record: TEncryptionDetails): string => {
  return record.algorithm?.toString() || String(record.id);
};
