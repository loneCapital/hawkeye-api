import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MarketBreadthController } from './market-breadth.controller';
import { MarketBreadthService } from './market-breadth.service';
import { MarketBreadth } from './market-breadth.model';
import { USStockDailyModule } from '../us-stock-daily/us-stock-daily.module';
@Module({
  imports: [SequelizeModule.forFeature([MarketBreadth]), USStockDailyModule],
  controllers: [MarketBreadthController],
  providers: [MarketBreadthService],
})
export class MarketBreadthModule {}
