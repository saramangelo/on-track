// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // MySQL username,
      user: "root",
      // TODO: Add MySQL password here
      password: "Smalls9690!",
      database: "",
    },
    console.log(`Connected to the database.`)
  );


  module.exports = db;