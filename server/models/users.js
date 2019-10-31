const sql = require('./db')

exports.getUserData = function (userId = -1, callback) {
    // let data = {}
    let queryStr = 'SELECT * FROM users'
    if (userId > 0) {
        queryStr += 'WHERE id=' + userId;
    }

    sql.query(queryStr, function (error, results, fields) {
        if (error) throw error;
        let user = (userId  < 0) ? 'all' : userId;
        console.log("user " + user + " result: %o", results);
        callback(results);
    });
};