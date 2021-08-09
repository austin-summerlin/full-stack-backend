import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { execSync } from 'child_process';

describe('API routes', () => {

  beforeAll(async () => {
    await setup(pool);
    execSync('npm run load-seed-data');
  });

  it('should return a list of movies', async () => {

    const dawn = {
      id: '1',
      title: 'Dawn of the Dead',
      genre: 'Zombie',
      year: 1978,
      director: 'George A. Romero',
      country: 'US',
      url: '/movies/dawn.png'
    };

    const suspiria = {
      id: '2',
      title: 'Suspiria',
      genre: 'Giallo',
      year: 1977,
      director: 'Dario Argento',
      country: 'Italy',
      url: '/movies/suspiria.png'
    };

    const friday = {
      id: '3',
      title: 'Friday The 13th',
      genre: 'Slasher',
      year: 1980,
      director: 'Sean S. Cunningham',
      country: 'US',
      url: '/movies/friday.png'
    };

    const res = await request(app).get('/api/movies/');
    expect(res.body).toEqual(expect.arrayContaining([dawn, suspiria, friday]));
  });
});
