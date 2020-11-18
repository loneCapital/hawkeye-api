import { Test, TestingModule } from '@nestjs/testing';
import { MarketBreadthController } from './market-breadth.controller';

describe('MarketBreadthController', () => {
  let controller: MarketBreadthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketBreadthController],
    }).compile();

    controller = module.get<MarketBreadthController>(MarketBreadthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
