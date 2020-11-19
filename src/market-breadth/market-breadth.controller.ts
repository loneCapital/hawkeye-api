import { Controller, Get } from '@nestjs/common';
import * as R from 'ramda';
import { USStockDailyService } from '../us-stock-daily/us-stock-daily.service';
import { USStockDaily } from '../us-stock-daily/us-stock-daily.model';

const isAbove20 = (item: USStockDaily) =>
  R.gt(R.prop('s_ma')(item))(R.prop('close')(item));

const clacRate = (stocks: USStockDaily[]) => {
  const gt = R.filter(isAbove20, stocks);
  const rate = R.divide(R.length(gt), R.length(stocks));
  return rate;
};

@Controller('market-breadth')
export class MarketBreadthController {
  constructor(private readonly usStockDalyService: USStockDailyService) {}

  @Get()
  async fetch(): Promise<any> {
    const stocks = (await this.usStockDalyService.findAll()) as USStockDaily[];
    const list = R.groupBy(R.prop('date'), stocks);

    return R.mapObjIndexed((item) => {
      console.log(R.groupBy(R.prop('sector'), item));
      return R.mapObjIndexed(
        clacRate,
        R.merge(R.groupBy(R.prop('sector'), item), { TOTAL: item }),
      );
    }, list);
  }
}
