import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { USStockDaily } from './us-stock-daily.model';

@Injectable()
export class USStockDailyService {
  constructor(
    @InjectModel(USStockDaily)
    private readonly usStockDailyModel: typeof USStockDaily,
    private readonly sequelize: Sequelize,
  ) {}

  async findAll(): Promise<USStockDaily[]> {
    return this.usStockDailyModel.findAll();
  }
}
