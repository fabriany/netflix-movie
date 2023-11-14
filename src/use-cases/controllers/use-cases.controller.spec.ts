import { Test, TestingModule } from '@nestjs/testing';
import { UsesCasesController } from './uses-cases.controller';

describe('UsesCasesController', () => {
  let controller: UsesCasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsesCasesController],
    }).compile();

    controller = module.get<UsesCasesController>(UsesCasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
