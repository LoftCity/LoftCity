const express = require('express');
const path = require('path');
const faker = require('faker');
const jsf = require('json-schema-faker');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'my-app')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = [faker.name.prefix(), faker.name.prefix(), faker.name.prefix()];
    res.json(list);
    console.log('Sent list of items');
});


// An api endpoint that returns a short list of items
app.get('/api/getKV', (req,res) => {
    var kv = [   {
                    "id":1,
                    "city": faker.image.avatar(),
                    "text": faker.lorem.paragraph(),
                    "address": faker.address.streetAddress() ,
                    "email":faker.internet.email()
                },
                {
                    "id":2,
                    "city": faker.image.avatar(),
                    "text": faker.lorem.paragraph(),
                    "address": faker.address.streetAddress() ,
                    "email":faker.internet.email()
                },
                {
                    "id":3,
                    "city": faker.image.avatar(),
                    "text": faker.lorem.paragraph(),
                    "address": faker.address.streetAddress() ,
                    "email":faker.internet.email()
                },
                {
                    "id":4,
                    "city": faker.image.avatar(),
                    "text": faker.lorem.paragraph(),
                    "address": faker.address.streetAddress() ,
                    "email":faker.internet.email()
                },
        ];
    res.json(kv);
    console.log('Sent list of items (kv)');
});





// An api endpoint that returns a short list of items
app.get('/api/getOne', (req,res) => {
    var onekv = [  
            {
            "city": faker.image.city(),
            "text": faker.lorem.paragraph(),
            "address": faker.address.streetAddress() ,
            "email":faker.internet.email(),
            "number" : faker.phone.phoneNumber()
             }
        ];
    res.json(onekv);
    console.log('Sent list of items(One)');
});




// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname +'/my-app/src/pages/error.html'));
});




const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
