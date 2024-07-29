const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const router = express.Router();
const Joi = require("joi");
const { join } = require("path");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

// database setup
const dbFilePath = join(__dirname, "database.db");

// Create an SQLite database instance using the file path
const db = new sqlite3.Database(dbFilePath);

// Middleware to parse JSON requests
router.use(express.json({ limit: "1mb" }));
router.use(cors());

const SECRET_TOKEN = "tiki17";

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.sendStatus(401); // Unauthorized
  }

  if (token !== SECRET_TOKEN) {
    return res.sendStatus(403); // Forbidden
  }

  next();
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000); // Generate a random 3-digit number
}

// Define your API routes
/**
 * @swagger
 * /api:
 *   get:
 *     summary: Get data from the testing endpoint
 *     description: Retrieve data from the testing endpoint
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 123456 (example)
 *               developer: John Smith (example)
 *               qa: Jane Doe (example)
 *               manager: Alice Johnson (example)
 *               task: Implement new feature (example)
 *               teamname: Awesome Team (example)
 */
router.get("/api", (req, res) => {
  const queryParams = req.query;

  if (Object.keys(queryParams).length === 0) {
    // If no query parameters provided, retrieve all data
    db.all("SELECT * FROM data", (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.status(200).json(rows);
      }
    });
  } else {
    // Constructing dynamic WHERE clause based on query parameters
    const conditions = Object.keys(queryParams)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const values = Object.values(queryParams);

    const query = `SELECT * FROM data WHERE ${conditions}`;

    db.all(query, values, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.status(200).json(rows);
      }
    });
  }
});

/**
 * @swagger
 * /api/id/{id}:
 *   get:
 *     summary: Get a specific data item by ID
 *     description: Retrieve a specific data item by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the data item
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 12 (example)
 *               developer: John Smith (example)
 *               qa: Jane Doe (example)
 *               manager: Alice Johnson (example)
 *               task: Implement new feature (example)
 *               teamname: Awesome Team (example)
 */
router.get("/api/id/:id", (req, res) => {
  const { id } = req.params;

  const isValidId = (id) => /^\d+$/.test(id) && parseInt(id) > 0;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID parameter" });
  }

  db.get("SELECT * FROM data WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: `Internal Server Error .${err}` });
    } else if (!row) {
      res.status(404).json({ message: "Data not found" });
    } else {
      res.status(200).json(row);
    }
  });
});

/**
 * @swagger
 * /api/id/{id}:
 *   put:
 *     summary: Update a specific data item by ID
 *     description: Update a specific data item by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the data item
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *               id: 123456
 *               developer: "Updated John Smith"
 *               qa: "Updated Jane Doe"
 *               manager: "Updated Alice Johnson"
 *               task: "Updated Implement new feature"
 *               teamname: "Updated Awesome Team"
 *     responses:
 *       200:
 *         description: Data updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Data updated successfully
 */
router.put("/api/id/:id", (req, res) => {
  const { id } = req.params;

  const isValidId = (id) => /^\d+$/.test(id) && parseInt(id) > 0;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID parameter" });
  }

  const { developer, QA, manager, task, teamname } = req.body;

  const { error } = schemaValidateRequest(req.body);
  if (error) return res.status(400).json({ error: error.message });

  db.run(
    "UPDATE data SET developer = ?, QA = ?, manager = ?, task = ?, teamname = ? WHERE id = ?",
    [developer, QA, manager, task, teamname, id],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ message: `Internal Server Error .${err}` });
      } else {
        db.get("SELECT * FROM data WHERE id = ?", [id], (err, row) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: `Internal Server Error .${err}` });
          } else if (!row) {
            res.status(404).json({ message: "Data not found" });
          } else {
            res.status(201).json(row);
          }
        });
        // res.json({ message: 'Data updated successfully', changes: this.changes });
      }
    }
  );
});

/**
 * @swagger
 * /api/id/{id}:
 *   patch:
 *     summary: Partially update a specific data item by ID
 *     description: Partially update a specific data item by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the data item
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             developer: "Updated John Doe"
 *             QA: "Updated Jane Smith"
 *     responses:
 *       200:
 *         description: Data updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Data updated successfully
 */
router.patch("/api/id/:id", (req, res) => {
  const { id } = req.params;
  const updateFields = req.body;

  const isValidId = (id) => /^\d+$/.test(id) && parseInt(id) > 0;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID parameter" });
  }

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).json({ message: "No fields to update" });
  }

  const placeholders = Object.keys(updateFields)
    .map((field) => `${field} = ?`)
    .join(", ");
  const values = Object.values(updateFields);

  db.run(
    `UPDATE data SET ${placeholders} WHERE id = ?`,
    [...values, id],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ message: `Internal Server Error .${err}` });
      } else {
        db.get("SELECT * FROM data WHERE id = ?", [id], (err, row) => {
          if (err) {
            console.error(err);
            res.status(500).json({ message: `Internal Server Error .${err}` });
          } else if (!row) {
            res.status(404).json({ message: "Data not found" });
          } else {
            res.status(201).json(row);
          }
        });
      }
    }
  );
});

/**
 * @swagger
 * /api/id/{id}:
 *   delete:
 *     summary: Delete a specific data item by ID
 *     description: Delete a specific data item by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the data item
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Data deleted successfully
 */
router.delete("/api/id/:id", (req, res) => {
  const { id } = req.params;

  const isValidId = (id) => /^\d+$/.test(id) && parseInt(id) > 0;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID parameter" });
  }

  db.run("DELETE FROM data WHERE id = ?", [id], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res
        .status(204)
        .json({ message: "Data deleted successfully", changes: this.changes });
    }
  });
});

/**
 * @swagger
 * /api:
 *   post:
 *     summary: Create new data at the testing endpoint
 *     description: Create new data at the testing endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *               id: 12
 *               developer: John Smith
 *               qa: Jane Doe
 *               manager: Alice Johnson
 *               task: Implement new feature
 *               teamname: Awesome Team
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Data created successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               message: Missing required fields
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal Server Error
 */
router.post("/api", (req, res) => {
  const { developer, QA, manager, task, teamname } = req.body;

  const { error } = schemaValidateRequest(req.body);
  if (error) return res.status(400).json({ error: error.message });

  db.run(
    "INSERT INTO data (developer, QA, manager, task, teamname) VALUES (?, ?, ?, ?, ?, ?)",
    [developer, QA, manager, task, teamname],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
      } else {
        res.status(201).json({
          message: "Data updated successfully",
          id: this.lastID,
          developer: developer,
          QA: QA,
          manager: manager,
          task: task,
          teamname: teamname,
        });
      }
    }
  );
});

// schema validation
function schemaValidateRequest(req) {
  const schema = Joi.object({
    developer: Joi.string().required(),
    QA: Joi.string().required(),
    manager: Joi.string(),
    task: Joi.string().required(),
    teamname: Joi.string(),
  });

  return schema.validate(req);
}

// Swagger setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API for Testing",
      version: "1.0.0",
    },
  },
  apis: [__filename], // specify the file(s) that contain your route comments
};

const specs = swaggerJsdoc(options);
router.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;
