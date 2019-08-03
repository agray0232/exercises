CREATE TABLE artists(
   id serial PRIMARY KEY,
   name varchar
);

CREATE TABLE albums(
   id serial PRIMARY KEY,
   title varchar,
   release_data date,
   genre varchar,
   artist_id integer REFERENCES artists(id)
);

CREATE TABLE songs(
   id serial PRIMARY KEY,
   title varchar
);

CREATE TABLE song_writers(
   id serial PRIMARY KEY,
   name varchar
);

CREATE TABLE songs_to_writers(
   id serial PRIMARY KEY,
   song_id integer REFERENCES songs(id),
   song_writer_id integer REFERENCES song_writers(id)
);

CREATE TABLE tracks(
   id serial PRIMARY KEY,
   title varchar,
   duration float,
   rating float,
   album_id integer REFERENCES albums(id),
   song_id integer REFERENCES songs(id)
);