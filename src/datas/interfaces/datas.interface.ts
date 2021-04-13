import { Document } from 'mongoose';

export interface Data extends Document {
  readonly location: String;
  readonly date: String;
  readonly total_cases: Number;
  readonly new_cases: Number;
  readonly new_cases_smoothed: Number;
  readonly total_deaths: Number;
  readonly new_deaths: Number;
  readonly new_deaths_smoothed: Number;
  readonly total_cases_per_million: Number;
  readonly new_cases_per_million: Number;
  readonly new_cases_smoothed_per_million: Number;
  readonly total_deaths_per_million: Number;
  readonly new_deaths_per_million: Number;
}
