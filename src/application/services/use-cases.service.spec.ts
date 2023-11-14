import { Test, TestingModule } from '@nestjs/testing';
import { UseCasesService } from './use-cases.service';

describe('UseCasesService', () => {
  let service: UseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UseCasesService],
    }).compile();

    service = module.get<UseCasesService>(UseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
