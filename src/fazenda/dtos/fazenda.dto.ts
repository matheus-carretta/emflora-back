import { IsNotEmpty, IsString } from 'class-validator';

export class FazendaDTO {
  @IsNotEmpty({ message: 'O campo "nome" não pode estar vazio.' })
  @IsString({ message: 'O campo "nome" deve ser uma string.' })
  nome: string;
}
