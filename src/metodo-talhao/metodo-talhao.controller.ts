import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MetodoTalhaoService } from './metodo-talhao.service';
import { MetodoTalhao } from '@prisma/client';
import { MetodoTalhaoDTO } from './dtos/create-metodo-talhao.dto';

@Controller('metodo-talhao')
export class MetodoTalhaoController {
  constructor(private readonly metodoTalhaoService: MetodoTalhaoService) {}

  @Post()
  async create(@Body() data: MetodoTalhaoDTO): Promise<MetodoTalhao> {
    return this.metodoTalhaoService.create(data);
  }

  @Get()
  async findAll(): Promise<MetodoTalhao[]> {
    return this.metodoTalhaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<MetodoTalhao | null> {
    return this.metodoTalhaoService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: MetodoTalhaoDTO,
  ): Promise<MetodoTalhao | null> {
    return this.metodoTalhaoService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<MetodoTalhao | null> {
    return this.metodoTalhaoService.remove(id);
  }
}
