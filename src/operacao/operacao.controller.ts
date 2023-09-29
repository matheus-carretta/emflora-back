import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { OperacaoDto } from './dtos/create-operacao-.dto';
import { Operacao } from './interfaces/operacao.interface';

@Controller('operacao')
export class OperacaoController {
  constructor(private readonly operacaoService: OperacaoService) {}

  @Post()
  async create(@Body() operacaoDto: OperacaoDto): Promise<Operacao> {
    return this.operacaoService.create(operacaoDto);
  }

  @Get()
  async findAll(): Promise<Operacao[]> {
    return this.operacaoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Operacao> {
    return this.operacaoService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() operacaoDto: OperacaoDto,
  ): Promise<Operacao> {
    return this.operacaoService.update(+id, operacaoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.operacaoService.remove(+id);
  }

  @Get('status')
  async status() {
    return 'online';
  }
}
