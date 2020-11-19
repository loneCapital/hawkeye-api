import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MarketBreadthController } from './market-breadth.controller';
import { MarketBreadthService } from './market-breadth.service';
import { MarketBreadth } from './market-breadth.model';

@Module({
  imports: [SequelizeModule.forFeature([MarketBreadth])],
  controllers: [MarketBreadthController],
  providers: [MarketBreadthService],
})
export class MarketBreadthModule {}
