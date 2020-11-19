import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { MarketBreadth } from './market-breadth.model';

@Injectable()
export class MarketBreadthService {
  constructor(
    @InjectModel(MarketBreadth)
    private readonly marketbreadthModel: typeof MarketBreadth,
    private readonly sequelize: Sequelize,
  ) {}

  async findAll(): Promise<MarketBreadth[]> {
    return this.marketbreadthModel.findAll();
  }
}
