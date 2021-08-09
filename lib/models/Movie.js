import pool from '../utils/pool.js';

export default class Movie {
  id;
  title;
  genre;
  director;
  country;
  year;
  url;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
    this.director = row.director;
    this.country = row.country;
    this.year = row.year;
    this.url = row.url;
  }

  static async insert({ title, genre, director, country, year, url }) {
    const { rows } = await pool.query(
      `INSERT INTO movies (title, genre, director, country, year, url)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, genre, director, country, year]
    );
    return new Movie(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
    return new Movie(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`SELECT * FROM movies`);
    return rows.map(row => new Movie(row));
  }

  static async update(movie, id) {
    const { rows } = await pool.query(`
    UPDATE movies
    SET title = $1, genre = $2, director = $3, country = $4, year = $5, url = $6
    WHERE id = $7
    RETURNING *`,
      [movie.title, movie.genre, movie.director, movie.country, movie.year, movie.url, id]
    );
    return new Movie(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(`
    DELETE FROM movies
    WHERE id = $1
    RETURNING *`,
      [id]
    );
    return new Movie(rows[0]);
  }
}
