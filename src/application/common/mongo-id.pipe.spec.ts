import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';

import { MongoIdPipe } from './mongo-id.pipe';

describe('MongoIdPipe', () => {
  let pipe: MongoIdPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoIdPipe],
    }).compile();

    pipe = module.get<MongoIdPipe>(MongoIdPipe);
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  it('should transform a valid MongoDB ID', () => {
    const value = '5f8263190f4a25448406b52a'; 
    const result = pipe.transform(value, { type: 'param', metatype: String, data: 'id' });
    expect(result).toEqual(value);
  });

  it('should throw BadRequestException for an invalid MongoDB ID', () => {
    const invalidValue = 'invalid_id';
    expect(() => pipe.transform(invalidValue, { type: 'param', metatype: String, data: 'id' }))
      .toThrow(BadRequestException);
  });
});





