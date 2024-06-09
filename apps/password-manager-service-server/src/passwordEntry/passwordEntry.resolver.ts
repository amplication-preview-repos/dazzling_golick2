import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PasswordEntryResolverBase } from "./base/passwordEntry.resolver.base";
import { PasswordEntry } from "./base/PasswordEntry";
import { PasswordEntryService } from "./passwordEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordEntry)
export class PasswordEntryResolver extends PasswordEntryResolverBase {
  constructor(
    protected readonly service: PasswordEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
