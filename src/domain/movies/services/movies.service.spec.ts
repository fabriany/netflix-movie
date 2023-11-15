// movies.service.spec.js
const { Test, TestingModule } = require('@nestjs/testing');
const { getModelToken } = require('@nestjs/mongoose');
const mongoose = require('mongoose');
const { MoviesService } = require('./movies.service');
const { Movie, MovieSchema } = require('../entities/movie.entity');

const mongooseMock = require('mongoose-mock');

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
