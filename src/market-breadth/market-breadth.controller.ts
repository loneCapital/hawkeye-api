import { Controller, Get } from '@nestjs/common';

@Controller('market-breadth')
export class MarketBreadthController {
  @Get()
  fetch():string{
    return 'market-breadth'
  }
}
