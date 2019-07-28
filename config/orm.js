var connection = require('./connection');

var orm = {

    all: function(tableInput callback,) {
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result) {
            if(err) throw err;
            callback(result);
        });
    }
};