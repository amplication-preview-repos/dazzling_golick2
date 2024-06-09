import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EncryptionDetailsService } from "./encryptionDetails.service";
import { EncryptionDetailsControllerBase } from "./base/encryptionDetails.controller.base";

@swagger.ApiTags("encryptionDetails")
@common.Controller("encryptionDetails")
export class EncryptionDetailsController extends EncryptionDetailsControllerBase {
  constructor(
    protected readonly service: EncryptionDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
