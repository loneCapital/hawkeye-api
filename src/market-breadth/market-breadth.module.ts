import { Module } from '@nestjs/common';
import { MarketBreadthController } from './market-breadth.controller';
import { MarketBreadthService } from './market-breadth.service';

@Module({
  controllers: [MarketBreadthController],
  providers: [MarketBreadthService],
})
export class MarketBreadthModule {}
