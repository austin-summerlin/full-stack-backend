import { Router } from 'express';
import Movie from '../models/Movie.js';

export default Router()

  .post('/api/movies', async (req, res) => {
    try {
      const movie = await Movie.insert(req.body);
      res.send(movie);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/movies/:id', async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.send(movie);
    } catch (err) {
      next(err);
    }
  })


  .get('/api/movies', async (req, res) => {
    try {
      const movie = await Movie.findAll();
      res.send(movie);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/movies/:id', async (req, res) => {
    try {
      const movie = await Movie.update(req.body, req.params.id);
      res.send(movie);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/movies/:id', async (req, res) => {
    try {
      const movie = await Movie.delete(req.params.id);
      res.send(movie);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

