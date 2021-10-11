DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  year INTEGER NOT NULL,
  director TEXT NOT NULL,
  country TEXT NOT NULL,
  image TEXT NOT NULL,
  writer TEXT NULL,
  length TEXT NULL,
  synopsis TEXT NULL
);