import { Injectable } from '@nestjs/common';
import { MetodoTalhao } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MetodoTalhaoService {
  constructor(private prisma: PrismaService) {}

  async create(data: { metodo: string }): Promise<MetodoTalhao> {
    return this.prisma.metodoTalhao.create({
      data,
    });
  }

  async findAll(): Promise<MetodoTalhao[]> {
    return this.prisma.metodoTalhao.findMany();
  }

  async findOne(id: number): Promise<MetodoTalhao | null> {
    return this.prisma.metodoTalhao.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: { metodo: string },
  ): Promise<MetodoTalhao | null> {
    return this.prisma.metodoTalhao.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<MetodoTalhao | null> {
    return this.prisma.metodoTalhao.delete({
      where: { id },
    });
  }
}
