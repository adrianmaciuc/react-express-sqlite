const { populatePeople } = require("./populate");
const { runDB } = require("./databaseConfig");
const fs = require("fs");

function isNoDatabaseCreated() {
  const dbFilePath = "./database.db"; // Assuming the database file is in the same directory

  try {
    fs.accessSync(dbFilePath, fs.constants.F_OK);
    console.log("db already created");
    return false; // File exists
  } catch (err) {
    return true; // File does not exist
  }
}

const db = runDB();

if (isNoDatabaseCreated()) {
  populatePeople(db, 50);
}
