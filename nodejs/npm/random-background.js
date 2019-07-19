const wallpaper = require('wallpaper');
const axios = require('axios');
const download = require('download-file');

var downloadOptions = {
    directory: "/Users/anthonygray/Images/",
    filename: "dog.jpg"
}

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        download(response.data.message, downloadOptions, async () => {
            var wallpaperURL = downloadOptions.directory + downloadOptions.filename;
            await wallpaper.set(wallpaperURL);
        });
    })