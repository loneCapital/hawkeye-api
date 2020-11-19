import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { USStockDailyController } from './us-stock-daily.controller';
import { USStockDailyService } from './us-stock-daily.service';
import { USStockDaily } from './us-stock-daily.model';

@Module({
  imports: [SequelizeModule.forFeature([USStockDaily])],
  controllers: [USStockDailyController],
  providers: [USStockDailyService],
  exports: [USStockDailyService],
})
export class USStockDailyModule {}
