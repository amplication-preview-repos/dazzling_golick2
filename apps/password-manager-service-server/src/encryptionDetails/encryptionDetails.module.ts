import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EncryptionDetailsModuleBase } from "./base/encryptionDetails.module.base";
import { EncryptionDetailsService } from "./encryptionDetails.service";
import { EncryptionDetailsController } from "./encryptionDetails.controller";
import { EncryptionDetailsResolver } from "./encryptionDetails.resolver";

@Module({
  imports: [EncryptionDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [EncryptionDetailsController],
  providers: [EncryptionDetailsService, EncryptionDetailsResolver],
  exports: [EncryptionDetailsService],
})
export class EncryptionDetailsModule {}
