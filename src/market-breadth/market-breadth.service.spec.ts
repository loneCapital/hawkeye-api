import { Test, TestingModule } from '@nestjs/testing';
import { MarketBreadthService } from './market-breadth.service';

describe('MarketBreadthService', () => {
  let service: MarketBreadthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketBreadthService],
    }).compile();

    service = module.get<MarketBreadthService>(MarketBreadthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
