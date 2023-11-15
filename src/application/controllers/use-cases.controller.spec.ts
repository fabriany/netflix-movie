import { Test, TestingModule } from '@nestjs/testing';
import { UsesCasesController } from './uses-cases.controller';
import { MoviesService } from '../../domain/movies/services/movies.service';
import { UseCasesService } from '../services/use-cases.service';
import { FilterMoviesDto } from '../dtos/movies.dto';
import { movie } from '../common/movie.js';

describe('UsesCasesController', () => {
  let controller: UsesCasesController;
  let moviesService: MoviesService;
  let useCasesService: UseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsesCasesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            findAll: jest.fn().mockReturnThis(),
            findOne: jest.fn().mockReturnThis(),
            create: jest.fn().mockReturnThis(),
            update: jest.fn().mockReturnThis(),
            delete: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue([]),
          },
        },
        UseCasesService,
      ],
    }).compile();

    controller = module.get<UsesCasesController>(UsesCasesController);
    moviesService = module.get<MoviesService>(MoviesService);
    useCasesService = module.get<UseCasesService>(UseCasesService);
  });

  describe('getAllMovies', () => {
    it('should return an array of movies', async () => {
      const result = [movie, movie];
      jest.spyOn(moviesService, 'findAll').mockResolvedValue(result);

      expect(await controller.getAllMovies({} as FilterMoviesDto)).toBe(result);
    });
  });

  describe('getMovieById', () => {
    it('should return a movie by ID', async () => {
      const result = movie;
      jest.spyOn(moviesService, 'findOne').mockResolvedValue(result);

      expect(await controller.getMovieById('id')).toBe(result);
    });
  });
});
