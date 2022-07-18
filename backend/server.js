const mongoose = require('mongoose');
const dotenv = require('dotenv');

/*** CONNECT TO DATABASE  ***/

/* Configure path to config.env */
dotenv.config({ path: './config.env' });

/* Import express app */
const app = require('./app');

/* Database connection string */
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

/* Connect Mongoose to the database */

main();

async function main() {
  try {
    await mongoose.connect(DB);
    console.log('DB connection successful 👍 ');
  } catch (error) {
    console.log(error);
  }
}

/* Set up the server */
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
