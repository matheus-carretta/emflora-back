import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaDTO } from './dtos/fazenda.dto';
import { Fazenda } from '@prisma/client';

@Controller('fazenda')
export class FazendaController {
  constructor(private readonly fazendaService: FazendaService) {}

  @Post()
  async create(@Body() fazendaDTO: FazendaDTO): Promise<Fazenda> {
    return this.fazendaService.create(fazendaDTO);
  }

  @Get()
  async findAll(): Promise<Fazenda[]> {
    return this.fazendaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Fazenda | null> {
    return this.fazendaService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() fazendaDTO: FazendaDTO,
  ): Promise<Fazenda | null> {
    return this.fazendaService.update(id, fazendaDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Fazenda | null> {
    return this.fazendaService.remove(id);
  }
}
