DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  year INTEGER NOT NULL,
  director TEXT NOT NULL,
  country TEXT NOT NULL,
  url TEXT NOT NULL
);