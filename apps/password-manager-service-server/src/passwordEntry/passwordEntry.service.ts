import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordEntryServiceBase } from "./base/passwordEntry.service.base";

@Injectable()
export class PasswordEntryService extends PasswordEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
