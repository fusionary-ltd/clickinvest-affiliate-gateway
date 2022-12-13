// https://ui.invisiblesport.com/api/v2/auth/brand/1928067857632071680/settings?lang=en
// geo value

// require express

const express = require('express');
const request = require('request');
const app = express();

const sslPrefix = process.env.SSL ? 'https://' : 'http://';

require('dotenv').config();

// rtret
app.get('/', (req, res) => {

    request(process.env.SPORT_URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {

          body = body.replace(
            '//d2en6kvan5r1zc.cloudfront.net/Assets/Bundle/Webpack/Scripts/BourneGreen/scriptMain.js?awlav=10',
            `${sslPrefix}${process.env.SERVER_URL}/scriptMain.js`
          );

            extensions = '<style>body{margin:0;padding:0;}</style>'
            body += extensions;

            res.send(body);
        }
    });
});

/**
 * @description
 */
app.get('/scriptMain.js', (req, res) => {
    request(process.env.SCRIPT_URL, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            body = body.replace(
                '/ApiSession/LogJavaScript?as=0',
                'https://quote.usinsuranceonline.com/AutoSimple/ApiSession/LogJavaScript?as=0'
            );

            res.send(body);
        }
    });
});



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Express app listening on port ${process.env.SERVER_PORT}!`)
});