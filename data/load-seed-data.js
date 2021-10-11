/* eslint-disable no-console */
import client from '../lib/utils/client.js';
import movies from './movies.js';

run();

async function run() {

  try {
    await Promise.all(
      movies.map(movie => {
        return client.query(`
        INSERT INTO movies (title, genre, director, country, year, image, writer, length, synopsis)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
        `, [movie.title, movie.genre, movie.director, movie.country, movie.year, movie.image, movie.writer, movie.length, movie.synopsis]);
      })
    );
  } catch (err) {
    console.log(err);
  }
  finally {
    client.end();
  }
}


