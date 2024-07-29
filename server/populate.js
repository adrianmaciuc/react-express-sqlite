const { faker } = require("@faker-js/faker");

function getRandomName(names) {
  // Generate a random index based on the length of the names array
  const randomIndex = Math.floor(Math.random() * names.length);

  // Return the randomly selected name
  return names[randomIndex];
}

// Example usage with your list of names
const nameList = [
  "Mirel",
  "Alex",
  "Levi",
  "Radu",
  "Iulian",
  "Andreea",
  "Dan",
  "Adrian",
];

/**
 * Populates developer, QA, manager, automation, task, story_points in the database with randomly generated people data.
 *
 * @param {Object} db - The database instance to perform operations on.
 * @param {number} nrOfPeople - The number of people to generate and insert into the 'data' table.
 * @returns {void}
 */
const populatePeople = (db, nrOfPeople) => {
  db.run("BEGIN TRANSACTION");

  for (let i = 0; i < nrOfPeople; i++) {
    // data generated random
    let developer = faker.person.fullName();
    let QA = faker.person.fullName();
    let manager = getRandomName(nameList);
    let task = faker.company.catchPhrase();
    let teamname = faker.commerce.productName();

    db.run(
      "INSERT INTO data (developer, QA, manager, task, teamname) VALUES (?, ?, ?, ?, ?)",
      [developer, QA, manager, task, teamname]
    );
  }

  db.run("COMMIT");
};

module.exports = { populatePeople };
