PRINT 'These are my queries';
SELECT name FROM restaurants WHERE rating = 5;
SELECT favoriate FROM restaurants WHERE rating = 5;
SELECT id FROM restaurants WHERE name = 'Atmosphere Restaurant';
SELECT name FROM restaurants WHERE category = 'American';
SELECT name FROM restaurants WHERE takeout = true;
SELECT name FROM restaurants WHERE takeout = true AND category = 'French';
SELECT name FROM restaurants WHERE distance < 2;
SELECT name FROM restaurants WHERE timesincevisit < 0.2;
SELECT name FROM restaurants WHERE timesincevisit > 0.2 AND rating = 5;