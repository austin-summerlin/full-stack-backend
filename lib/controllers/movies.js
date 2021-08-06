import { Router } from 'express';
import Movie from '../models/movie';

export default Router()
  .get('/api/movies/:id', (req, res, next) => {
    Movie.getMovieInfo(req.params.id)
      .then(movie => res.send(movie))
      .catch(next);
  })

  .get('/api/movies', (req, res, next) => {
    Movie.getAllMovies()
      .then(movies => res.send(movies))
      .catch(next);
  });
