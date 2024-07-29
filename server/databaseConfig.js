const { join } = require("path");
const sqlite3 = require("sqlite3").verbose();

// DATABASE SETUP

function runDB() {
  // Specify the filename for the database in the same folder
  const dbFilePath = join(__dirname, "database.db");

  // Create an SQLite database using the file path
  const db = new sqlite3.Database(dbFilePath);

  console.log("db created");
  // Create a table for your data
  db.serialize(() => {
    db.run(`
            CREATE TABLE IF NOT EXISTS data (
                id INTEGER PRIMARY KEY,
                developer TEXT,
                QA TEXT,
                manager TEXT,
                task TEXT,
                teamname TEXT
            )
        `);
  });

  return db;
}

module.exports = { runDB };
