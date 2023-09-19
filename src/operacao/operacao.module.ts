import { Module } from '@nestjs/common';
import { OperacaoService } from './operacao.service';
import { OperacaoController } from './operacao.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { TipoOperacaoService } from 'src/tipo-operacao/tipo-operacao.service';

@Module({
  imports: [PrismaModule],
  providers: [OperacaoService, TipoOperacaoService],
  controllers: [OperacaoController],
  exports: [OperacaoModule],
})
export class OperacaoModule {}
