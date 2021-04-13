import * as mongoose from 'mongoose';

export const DatasSchema = new mongoose.Schema({
  location: String,
  date: String,
  total_cases: Number,
  new_cases: Number,
  new_cases_smoothed: Number,
  total_deaths: Number,
  new_deaths: Number,
  new_deaths_smoothed: Number,
  total_cases_per_million: Number,
  new_cases_per_million: Number,
  new_cases_smoothed_per_million: Number,
  total_deaths_per_million: Number,
  new_deaths_per_million: Number,
});
