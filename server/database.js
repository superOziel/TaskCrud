const mongoose = require('mongoose');

const URI = 'mongodb://localhost/task';

mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada.'))
    .catch(err => console.log(err));

module.exports = mongoose;
