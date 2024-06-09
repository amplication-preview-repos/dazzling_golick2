import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PasswordEntryModuleBase } from "./base/passwordEntry.module.base";
import { PasswordEntryService } from "./passwordEntry.service";
import { PasswordEntryController } from "./passwordEntry.controller";
import { PasswordEntryResolver } from "./passwordEntry.resolver";

@Module({
  imports: [PasswordEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [PasswordEntryController],
  providers: [PasswordEntryService, PasswordEntryResolver],
  exports: [PasswordEntryService],
})
export class PasswordEntryModule {}
