// hold classes with methods to run queries
const db = require('./connection');

class Queries {

    constructor(connection){
        this.connection = connection;
    }

    // methods
    createEmployee(data) {
        return this.connection.promise().query('INSERT INTO employee SET ?', data)
    }

    updateEmployee(data){
        return this.connection.promise().query('UPDATE ')
    }
}




module.exports = new Queries(db);