// tipo-operacao.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoOperacaoService } from './tipo-operacao.service';
import { TipoOperacao } from './interfaces/tipo-operacao.interface';
import { TipoOperacaoDto } from './dtos/create-tipo-operacao.dto';

@Controller('tipo-operacao')
export class TipoOperacaoController {
  constructor(private readonly tipoOperacaoService: TipoOperacaoService) {}

  @Get()
  findAll(): Promise<TipoOperacao[]> {
    return this.tipoOperacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TipoOperacao> {
    return this.tipoOperacaoService.findOne(+id);
  }

  @Post()
  createcreate(
    @Body() tipoOperacaoDto: TipoOperacaoDto,
  ): Promise<TipoOperacao> {
    return this.tipoOperacaoService.create(tipoOperacaoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: { nome: string },
  ): Promise<TipoOperacao> {
    return this.tipoOperacaoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TipoOperacao> {
    return this.tipoOperacaoService.remove(+id);
  }
}
