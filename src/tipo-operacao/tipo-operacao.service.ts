import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TipoOperacaoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tipoOperacao.findMany();
  }

  async findOne(id: number) {
    return this.prisma.tipoOperacao.findUnique({
      where: { id },
    });
  }

  async create(data: { nome: string }) {
    return this.prisma.tipoOperacao.create({
      data,
    });
  }

  async update(id: number, data: { nome: string }) {
    return this.prisma.tipoOperacao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const tipoEstaEmUso = await this.prisma.tipoOperacao.findUnique({
      where: { id },
      include: { operacoes: true },
    });

    if (tipoEstaEmUso.operacoes.length > 0) {
      throw new UnprocessableEntityException(
        'Este tipo de operação está sendo utilizado',
      );
    }

    return this.prisma.tipoOperacao.delete({
      where: { id },
    });
  }
}
