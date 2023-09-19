export class Operacao {
  id: number;
  codigo: string;
  nome: string;
  valorUnitario: number;
  rendPrincipal: number;
  rendSuporte?: number | null;
  tipoOperacaoId: number;
}
