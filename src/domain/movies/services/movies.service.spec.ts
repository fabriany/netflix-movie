// movies.service.spec.js
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { MoviesService } from './movies.service';
import { Movie, MovieSchema } from '../entities/movie.entity';

describe('MoviesService', () => {
  let service;
  let model;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getModelToken(Movie.name),
          useValue: mongoose.model('Movie', MovieSchema),
        },
      ],
    }).compile();

    service = module.get(MoviesService);
    model = module.get(getModelToken(Movie.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a movie by id', async () => {
    const mockMovie = { _id: '123', title: 'Test Movie' };
    jest.spyOn(model, 'findById').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(mockMovie),
    });

    const result = await service.findOne('123');

    expect(result).toEqual(mockMovie);
  });
});
