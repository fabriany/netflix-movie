import { Test, TestingModule } from '@nestjs/testing';
import { UseCasesService } from './use-cases.service';
import { MoviesService } from '../../domain/movies/services/movies.service';
import { Movie } from '../../domain/movies/entities/movie.entity';
import { movie } from '../common/movie.js';

describe('UseCasesService', () => {
  let useCasesService: UseCasesService;
  let moviesServiceMock: jest.Mocked<MoviesService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UseCasesService,
        {
          provide: MoviesService,
          useValue: {
            findAll: jest.fn().mockReturnThis(),
            findOne: jest.fn().mockReturnThis(),
            create: jest.fn().mockReturnThis(),
            update: jest.fn().mockReturnThis(),
            delete: jest.fn().mockReturnThis(),
            toObject: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue(Movie),
          },
        },
      ],
    }).compile();

    useCasesService = module.get<UseCasesService>(UseCasesService);
    moviesServiceMock = module.get(MoviesService) as jest.Mocked<MoviesService>;
  });

  describe('getReviewsForPlatforms', () => {
    it('should group reviews by platform', async () => {
      const mockMovie: Movie = movie as Movie;

      moviesServiceMock.findOne.mockResolvedValue(movie);

      const result = await useCasesService.getReviewsForPlatforms(mockMovie);

      expect(movie).toEqual(movie);
    });
  });
});
