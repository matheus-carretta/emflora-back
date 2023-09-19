import { Injectable } from '@nestjs/common';
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
    return this.prisma.tipoOperacao.delete({
      where: { id },
    });
  }
}
