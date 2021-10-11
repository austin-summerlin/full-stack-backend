import pool from '../utils/pool.js';

export default class Movie {

  id;
  title;
  genre;
  director;
  writer;
  length;
  synopsis;
  country;
  year;
  image;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
    this.director = row.director;
    this.writer = row.writer;
    this.length = row.length;
    this.synopsis = row.synopsis;
    this.country = row.country;
    this.year = row.year;
    this.image = row.image;
  }

  static async insert({ title, genre, director, country, year, image, writer, length, synopsis }) {
    const { rows } = await pool.query(
      `INSERT INTO movies (title, genre, director, country, year, image, writer, length, synopsis)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *`,
      [title, genre, director, country, year, image, writer, length, synopsis]
    );
    return new Movie(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`SELECT * FROM movies`);
    return rows.map(row => new Movie(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM movies WHERE id = $1`,
      [id]
    );
    return new Movie(rows[0]);
  }


  static async update(movie, id) {
    const { rows } = await pool.query(`
    UPDATE movies
    SET title = $1,
        genre = $2,
        director = $3,
        country = $4,
        year = $5,
        image = $6,
        writer = $7,
        length = $8,
        synopsis = $9
    WHERE id = $10
    RETURNING *
    `, [movie.title, movie.genre, movie.director, movie.country, movie.year, movie.image, movie.writer, movie.length, movie.synopsis, id]
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
