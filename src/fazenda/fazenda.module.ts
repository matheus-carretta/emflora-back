import { Module } from '@nestjs/common';
import { FazendaController } from './fazenda.controller';
import { FazendaService } from './fazenda.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FazendaController],
  providers: [FazendaService],
  exports: [FazendaModule],
})
export class FazendaModule {}
