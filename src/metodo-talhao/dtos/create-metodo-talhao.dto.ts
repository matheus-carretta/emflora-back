import { IsString, IsNotEmpty } from 'class-validator';

export class MetodoTalhaoDTO {
  @IsString({ message: 'O campo "metodo" deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "metodo" não pode estar vazio.' })
  metodo: string;
}
