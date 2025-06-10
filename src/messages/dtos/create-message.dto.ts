import { IsString, IsNotEmpty } from 'class-validator';

export class createMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
