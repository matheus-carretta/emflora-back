import { IsNotEmpty, Length } from 'class-validator';

export class TipoOperacaoDto {
  @IsNotEmpty({ message: 'O campo "nome" não pode estar vazio' })
  @Length(1, 255, {
    message: 'O campo "nome" deve ter entre 1 e 255 caracteres',
  })
  readonly nome: string;
}
