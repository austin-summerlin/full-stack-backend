import pool from '../utils/pool.js';

export default class Movie {

  id;
  name;
  genre;
  director;
  country;
  year;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.director = row.director;
    this.country = row.country;
    this.year = row.year;
  }

  static async getMovieInfo(id) {
    const { rows } = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
    return rows.map(row => new Movie(row));
  }

  getAllMovieInfo() {
    const { rows } = await pool.query(`SELECT * FROM movies`);
    return rows.map(row => new Movie(row));
  }
}
