import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { OperacaoDto } from './dtos/create-operacao-.dto';
import { Operacao } from './interfaces/operacao.interface';
import { TipoOperacaoService } from 'src/tipo-operacao/tipo-operacao.service';

@Injectable()
export class OperacaoService {
  constructor(
    private prisma: PrismaService,
    private tipoOperacaoService: TipoOperacaoService,
  ) {}

  async create(operacaoDto: OperacaoDto): Promise<Operacao> {
    const tipoOperacao = await this.tipoOperacaoService.findOne(
      operacaoDto.tipoOperacaoId,
    );

    if (!tipoOperacao) {
      throw new NotFoundException('Código de operação inexistente');
    }

    const createdOperacao = await this.prisma.operacao.create({
      data: operacaoDto,
    });
    return createdOperacao;
  }

  async findAll(): Promise<Operacao[]> {
    return this.prisma.operacao.findMany({ include: { tipoOperacao: true } });
  }

  async findOne(id: number): Promise<Operacao> {
    const operacao = await this.prisma.operacao.findUnique({
      where: { id },
    });

    if (!operacao) {
      throw new NotFoundException(`Operacao com ID ${id} não encontrada.`);
    }

    return operacao;
  }

  async update(id: number, operacaoDto: OperacaoDto): Promise<Operacao> {
    const updatedOperacao = await this.prisma.operacao.update({
      where: { id },
      data: operacaoDto,
    });

    if (!updatedOperacao) {
      throw new NotFoundException(`Operacao com ID ${id} não encontrada.`);
    }

    return updatedOperacao;
  }

  async remove(id: number): Promise<void> {
    const deletedOperacao = await this.prisma.operacao.delete({
      where: { id },
    });

    if (!deletedOperacao) {
      throw new NotFoundException(`Operacao com ID ${id} não encontrada.`);
    }
  }
}
