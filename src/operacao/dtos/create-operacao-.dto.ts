import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class OperacaoDto {
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  valorUnitario: number;

  @IsNotEmpty()
  @IsNumber()
  rendPrincipal: number;

  @IsOptional()
  @IsNumber()
  rendSuporte?: number;

  @IsNotEmpty()
  @IsNumber()
  tipoOperacaoId: number;
}
