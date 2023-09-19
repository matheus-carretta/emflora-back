import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoOperacaoModule } from './tipo-operacao/tipo-operacao.module';
import { PrismaModule } from 'prisma/prisma.module';
import { OperacaoModule } from './operacao/operacao.module';

@Module({
  imports: [TipoOperacaoModule, PrismaModule, OperacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
