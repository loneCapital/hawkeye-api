import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketBreadthModule } from './market-breadth/market-breadth.module';

@Module({
  imports: [MarketBreadthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
