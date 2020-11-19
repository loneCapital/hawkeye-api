import { Controller, Get } from '@nestjs/common';
import { MarketBreadthService } from './market-breadth.service';
import { MarketBreadth } from './market-breadth.model';
import { USStockDailyService } from '../us-stock-daily/us-stock-daily.service';
@Controller('market-breadth')
export class MarketBreadthController {
  constructor(
    private readonly marketBreadthService: MarketBreadthService,
    private readonly usStockDalyService: USStockDailyService,
  ) {}

  @Get()
  fetch(): Promise<MarketBreadth[]> {
    return this.usStockDalyService.findAll();
  }
}
