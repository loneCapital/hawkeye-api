import { Controller, Get } from '@nestjs/common';
import { MarketBreadthService } from './market-breadth.service';
import { MarketBreadth } from './market-breadth.model';
@Controller('market-breadth')
export class MarketBreadthController {
  constructor(private readonly marketBreadthService: MarketBreadthService) {}

  @Get()
  fetch(): Promise<MarketBreadth[]> {
    return this.marketBreadthService.findAll();
  }
}
