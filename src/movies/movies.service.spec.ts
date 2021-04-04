import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll() method', () => {
    it('Should return Array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne method', () => {
    it('Should return movie', () => {
      service.create({
        title: 'Random',
        genres: ['romance'],
        year: 2000,
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('Should return 404 error', () => {
      service.create({
        title: 'Random',
        genres: ['romance'],
        year: 2000,
      });

      try {
        service.getOne(10);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
        expect(error.message).toBe('Movie with ID 99 not found.');
      }
    });
  });
});
