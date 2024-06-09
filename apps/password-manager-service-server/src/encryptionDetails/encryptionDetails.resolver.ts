import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EncryptionDetailsResolverBase } from "./base/encryptionDetails.resolver.base";
import { EncryptionDetails } from "./base/EncryptionDetails";
import { EncryptionDetailsService } from "./encryptionDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EncryptionDetails)
export class EncryptionDetailsResolver extends EncryptionDetailsResolverBase {
  constructor(
    protected readonly service: EncryptionDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
