import { Controller, Get } from '@nestjs/common';
import * as R from 'ramda';
import { Op } from 'sequelize';
import { USStockDailyService } from '../us-stock-daily/us-stock-daily.service';
import { USStockDaily } from '../us-stock-daily/us-stock-daily.model';

const isAbove20 = (item: USStockDaily) =>
  R.lt(R.prop('s_ma')(item))(R.prop('close')(item));

const clacRate = (stocks: USStockDaily[]) => {
  const gt = R.filter(isAbove20, stocks);
  const rate = R.divide(R.length(gt), R.length(stocks));
  return Math.round(rate * 100);
};

@Controller('market-breadth')
export class MarketBreadthController {
  constructor(private readonly usStockDalyService: USStockDailyService) {}

  @Get()
  async fetch(): Promise<any> {
    const stocks = (await this.usStockDalyService.findAll({
      where: {
        // date: '2020-11-19 00:00:00.000',
        date: {
          [Op.between]: ['2020-9-18 00:00:00', '2020-11-19 00:00:00'],
        },
      },
    })) as USStockDaily[];
    const list = R.groupBy(R.prop('date'), stocks);
    console.log('stocks', stocks.length);
    return R.mapObjIndexed((item) => {
      return R.mapObjIndexed(
        clacRate,
        R.merge(R.groupBy(R.prop('sector'), item), { TOTAL: item }),
      );
    }, list);
  }
}
