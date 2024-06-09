/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EncryptionDetailsWhereInput } from "./EncryptionDetailsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EncryptionDetailsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EncryptionDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => EncryptionDetailsWhereInput)
  @IsOptional()
  @Field(() => EncryptionDetailsWhereInput, {
    nullable: true,
  })
  every?: EncryptionDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => EncryptionDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => EncryptionDetailsWhereInput)
  @IsOptional()
  @Field(() => EncryptionDetailsWhereInput, {
    nullable: true,
  })
  some?: EncryptionDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => EncryptionDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => EncryptionDetailsWhereInput)
  @IsOptional()
  @Field(() => EncryptionDetailsWhereInput, {
    nullable: true,
  })
  none?: EncryptionDetailsWhereInput;
}
export { EncryptionDetailsListRelationFilter as EncryptionDetailsListRelationFilter };
