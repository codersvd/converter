DROP TABLE IF EXISTS places;
CREATE TABLE places(place_id BIGSERIAL PRIMARY KEY, name VARCHAR(100), status integer, userid integer);