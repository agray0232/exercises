CREATE TABLE restaurants(
    id serial PRIMARY KEY,
    distance float,
    rating int,
    category varchar,
    favoriate varchar,
    takeout boolean,
    timeSinceVisit float
);

