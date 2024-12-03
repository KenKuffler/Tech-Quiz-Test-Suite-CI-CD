import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

// Derive __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON data using fs
const pythonQuestions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './pythonQuestions.json'), 'utf-8')
);

db.once('open', async () => {
  try {
    await cleanDB('Question', 'questions');
    await Question.insertMany(pythonQuestions);
    console.log('Questions seeded!');
  } catch (error) {
    console.error('Failed to seed database:', error);
  } finally {
    process.exit(0);
  }
});


