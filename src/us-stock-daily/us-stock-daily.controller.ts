import { Controller, Get } from '@nestjs/common';
import { USStockDailyService } from './us-stock-daily.service';
import { USStockDaily } from './us-stock-daily.model';

@Controller('us-stock-daily')
export class USStockDailyController {
  constructor(private readonly usStockDailyService: USStockDailyService) {}

  @Get()
  fetch(): Promise<USStockDaily[]> {
    return this.usStockDailyService.findAll();
  }
}
