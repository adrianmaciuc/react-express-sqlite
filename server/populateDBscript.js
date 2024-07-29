const { populatePeople } = require("./populate")
const { runDB } = require("./databaseConfig")

const db = runDB()
populatePeople(db, 50)