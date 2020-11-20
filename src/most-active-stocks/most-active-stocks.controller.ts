import { Controller, Get } from '@nestjs/common';
import { Op } from 'sequelize';
import { USStockDailyService } from '../us-stock-daily/us-stock-daily.service';

@Controller('most-active-stocks')
export class MostActiveStocksController {
  constructor(private readonly usStockDalyService: USStockDailyService) {}

  @Get()
  async fetch(): Promise<any> {
    const stocks = await this.usStockDalyService.findAll({
      where: {
        ma_amt: {
          [Op.gt]: 10000 * 10000,
        },
        sector: {
          [Op.not]: 'Financials',
        },
        date: {
          [Op.like]: '2020-11-19%',
        },
      },
    });
    const spy = await this.usStockDalyService.findAll({
      where: {
        symbol: 'AAPL',
        date: {
          [Op.like]: '2020-11-19%',
        },
      },
    });
    console.log('spy', spy[0]);
    return stocks;
  }
}
