import { Module } from '@nestjs/common';
import { MostActiveStocksController } from './most-active-stocks.controller';
import { USStockDailyModule } from '../us-stock-daily/us-stock-daily.module';

@Module({
  imports: [
    USStockDailyModule,
  ],
  controllers: [MostActiveStocksController],
})
export class MostActiveStocksModule {}
