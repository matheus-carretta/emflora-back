import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class OperacaoDto {
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  tipoOperacaoId: number;
}
