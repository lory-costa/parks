const connection = require('./connection')

function getRatingByUserId (db = connection) {
    return db ('rating').select()
}


module.exports = {
  getRating
}

const total = 0;
    for(const i = 0; i < rating.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;