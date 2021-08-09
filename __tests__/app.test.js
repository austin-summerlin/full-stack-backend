/* eslint-disable quotes */
import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Movie from '../lib/models/movie.js';

describe('API routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a fighter via POST', async () => {
    const res = await request(app)
      .post('/api/movies')
      .send({
        title: 'Dawn of the Dead',
        genre: 'Zombie',
        year: 1978,
        director: 'George A. Romero',
        country: 'US',
        url: '/movies/dawn.png'
      });

    expect(res.body).toEqual({
      id: '1',
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    });
  });

  it('returns all movies via GET', async () => {

    const dawn = await Movie.insert({
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    });

    const suspiria = await Movie.insert({
      title: 'Suspiria',
      genre: 'Giallo',
      year: 1977,
      director: 'Dario Argento',
      country: 'Italy',
      url: '/movies/suspiria.png'
    });

    const friday = await Movie.insert({
      title: 'Friday The 13th',
      genre: 'Slasher',
      year: 1980,
      director: 'Sean S. Cunningham',
      country: 'US',
      url: '/movies/friday.png'
    });

    const res = await request(app).get('/api/movies/');
    expect(res.body).toEqual([dawn, suspiria, friday]);
  });

  it('returns a movie by id via GET', async () => {
    const movie = await Movie.insert({
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    });
    const res = await request(app).get(`/api/movies/${movie.id}`);
    expect(res.body).toEqual(movie);
  });

  it('updates a movie via PUT', async () => {
    const movie = await Movie.insert({
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    });

    movie.country = 'USA';

    const res = await request(app).put(`/api/movies/${movie.id}`)
      .send(movie);
    expect(res.body).toEqual(movie);
  });

  it('deletes a movie via DELETE', async () => {
    const movie = await Movie.insert({
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    });

    const res = await request(app).delete(`/api/movies/${movie.id}`)
      .send(movie);
    expect(res.body).toEqual(movie);
  });

});

