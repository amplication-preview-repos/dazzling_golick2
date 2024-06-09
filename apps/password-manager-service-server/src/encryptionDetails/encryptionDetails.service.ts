import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EncryptionDetailsServiceBase } from "./base/encryptionDetails.service.base";

@Injectable()
export class EncryptionDetailsService extends EncryptionDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
