import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Fazenda } from './interfaces/fazenda.interface';
import { FazendaDTO } from './dtos/fazenda.dto';

@Injectable()
export class FazendaService {
  constructor(private prisma: PrismaService) {}

  async create(fazendaDTO: FazendaDTO): Promise<Fazenda> {
    return this.prisma.fazenda.create({
      data: fazendaDTO,
    });
  }

  async findAll(): Promise<Fazenda[]> {
    return this.prisma.fazenda.findMany();
  }

  async findOne(id: number): Promise<Fazenda | null> {
    return this.prisma.fazenda.findUnique({
      where: { id },
    });
  }

  async update(id: number, fazendaDTO: FazendaDTO): Promise<Fazenda | null> {
    return this.prisma.fazenda.update({
      where: { id },
      data: fazendaDTO,
    });
  }

  async remove(id: number): Promise<Fazenda | null> {
    return this.prisma.fazenda.delete({
      where: { id },
    });
  }
}
