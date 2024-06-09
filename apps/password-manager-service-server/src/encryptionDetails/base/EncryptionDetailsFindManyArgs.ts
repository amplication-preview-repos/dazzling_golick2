/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EncryptionDetailsWhereInput } from "./EncryptionDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EncryptionDetailsOrderByInput } from "./EncryptionDetailsOrderByInput";

@ArgsType()
class EncryptionDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EncryptionDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EncryptionDetailsWhereInput, { nullable: true })
  @Type(() => EncryptionDetailsWhereInput)
  where?: EncryptionDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [EncryptionDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EncryptionDetailsOrderByInput], { nullable: true })
  @Type(() => EncryptionDetailsOrderByInput)
  orderBy?: Array<EncryptionDetailsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EncryptionDetailsFindManyArgs as EncryptionDetailsFindManyArgs };
