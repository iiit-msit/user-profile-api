// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('books.csv')
    .then(books => {

        // users is a JSON array
        // log the JSON array
        console.log(books);
        var book = books;
        // convert JSON object to string
        const data = JSON.stringify(book);
        // Write JSON array to a file
        fs.writeFile('books.json', JSON.stringify(data, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });
    }).catch(err => {
        // log error if any
        console.log(err);
    });