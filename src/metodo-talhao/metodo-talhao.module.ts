import { Module } from '@nestjs/common';
import { MetodoTalhaoController } from './metodo-talhao.controller';
import { MetodoTalhaoService } from './metodo-talhao.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MetodoTalhaoController],
  providers: [MetodoTalhaoService],
  exports: [MetodoTalhaoModule],
})
export class MetodoTalhaoModule {}
