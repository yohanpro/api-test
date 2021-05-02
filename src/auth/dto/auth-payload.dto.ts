import { IsString } from 'class-validator';

export class AuthPayloadDto {
  @IsString()
  readonly token: string;
}
