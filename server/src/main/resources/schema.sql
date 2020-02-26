DROP TABLE IF EXISTS places;
CREATE TABLE places(id BIGSERIAL PRIMARY KEY, name VARCHAR(100), status integer, userid integer, alias VARCHAR(100) );

DROP TABLE IF EXISTS users;
CREATE TABLE users(id BIGSERIAL PRIMARY KEY, name VARCHAR(100), status integer, email VARCHAR(255), password VARCHAR(255), token VARCHAR(255));