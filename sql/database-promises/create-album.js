const prompt = require('prompt-promise');
const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres'
};
const pgp = require('pg-promise')();
const db = pgp(config);

const album = {
    name: '',
    released: '',
    artist_id: null
}

prompt('Album Name:')
    .then((val) => {
        album.name = val;
        return prompt('release date (2000-12-31):')
    })
    .then((val) => {
        album.released = val;
        return prompt('artist name:');
    })
    .then((val) => {
        album.artist_name = val;
        return db.one("SELECT id FROM artists WHERE name = $1", val)
            .then((result) => {
                console.log('found artist')
                console.log(result)
                return result.id
            })
            .catch(e => {
                console.log(e);
                return 0;
            })
    })
    .then(id => {
        if (id === 0) {
            console.log('could not find artist');
            console.log(album.artist_name);
            return db.result('INSERT INTO artists (name) VALUES ($1)', album.artist_name)
                .then(result => {
                    return db.one("SELECT id FROM artists WHERE name = $1", album.artist_name)
                        .then((result) => {
                            console.log('created and found artist')
                            return result.id
                        })
                        .catch(e => {
                            console.log(e);
                            return 0;
                        });
                })
                .catch(e => {
                    console.log(e);
                    console.log('error creating artist');
                    return 0;
                })
        } else {
            return id;
        }
    })
    .then(id => {
        album.artist_id = id;
        const query = 'INSERT INTO albums (title, release_data, artist_id) \
        VALUES (${name}, ${released}, ${artist_id})';
        return db.result(query, album);
    })
    .then((result) => {
        console.log(`Inserted ${result.rowCount} album.`);
        pgp.end();
        prompt.finish();
    })
    .catch((e) => {
        console.error(e);
    });