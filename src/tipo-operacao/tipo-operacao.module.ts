import { Module } from '@nestjs/common';
import { TipoOperacaoService } from './tipo-operacao.service';
import { TipoOperacaoController } from './tipo-operacao.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TipoOperacaoService],
  controllers: [TipoOperacaoController],
  exports: [TipoOperacaoModule],
})
export class TipoOperacaoModule {}
