import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { USStockDaily } from './us-stock-daily.model';
import { Op } from 'sequelize';
@Injectable()
export class USStockDailyService {
  constructor(
    @InjectModel(USStockDaily)
    private readonly usStockDailyModel: typeof USStockDaily,
    private readonly sequelize: Sequelize,
  ) {}

  async findAll(): Promise<USStockDaily[]> {
    return this.usStockDailyModel.findAll({
      where: {
        sector: { [Op.not]: null },
        date: {
          [Op.between]: ['2020-9-18T00:00:00.000Z', '2020-11-18T00:00:00.000Z'],
        },
      },
    });
  }
}
