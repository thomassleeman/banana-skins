const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('../models/jobsModel');
const User = require('../models/userModel');
const Category = require('../models/categoryModel');

/* CONNECT TO DATABASE
Because this file runs externally to the express app the connection to the database
must be done again as below. This means: 
  1. Define path to config file.
  2. Define path to database
  3. Connect mongoose to MongoDB using mongoose.connect()
  */
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

/* READ DATA FILE */
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/jobs.json`, 'utf-8'));
const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/categories.json`, 'utf-8')
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));

/* IMPORT DATA INTO DATABASE
Using MongoDB .create() method */
const importData = async () => {
  try {
    await Job.create(jobs);
    await User.create(users, { validateBeforeSave: false });
    await Category.create(Category);
    console.log('data loaded 👍 ');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

/* DELETE EXISTING DATA FROM DATABASE
 */
const deleteData = async () => {
  try {
    await Job.deleteMany();
    await User.deleteMany();
    await Category.deleteMany();
    console.log('data deleted 🗑 ');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

/* RUN CHOSEN OPERATION USING PROCESS.ARGV */
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
