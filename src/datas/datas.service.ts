import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Data } from './interfaces/datas.interface';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as path from 'path';

const newPath = path.join(__dirname, 'covid.csv');

@Injectable()
export class DatasService {
  constructor(@InjectModel('Data') private readonly dataModel: Model<Data>) {}
  // fetch all customers
  async getAllData(querr): Promise<Data[]> {
    const pageSize = +querr.pagesize;
    const currentPage = +querr.page;
    const dataQuerry  = this.dataModel.find();
    if (pageSize && currentPage ){
      dataQuerry.skip(pageSize*(currentPage-1)).limit(pageSize)
    }

    const datas = await dataQuerry.exec();
    return datas;
  }

  async getChartData(): Promise<Data[]> {
    const datas = await this.dataModel.find({}, 'date new_cases new_deaths').exec();
    return datas;
  }

  async updateAllData(): Promise<any> {
   const updating =await this.dataModel.deleteMany({}).then( () => {
     fs
      .createReadStream(newPath)
      .pipe(csv())
      .on('data', (data) => {
        const newCovid = new this.dataModel({
          location: data['location'],
          date: data['date'],
          total_cases: data['total_cases'],
          new_cases: data['new_cases'],
          new_cases_smoothed: data['new_cases_smoothed'],
          total_deaths: data['total_deaths'],
          new_deaths: data['new_deaths'],
          new_deaths_smoothed: data['new_deaths_smoothed'],
          total_cases_per_million: data['total_cases_per_million'],
          new_cases_per_million: data['new_cases_per_million'],
          new_cases_smoothed_per_million: data['new_cases_smoothed_per_million'],
          total_deaths_per_million: data['total_deaths_per_million'],
          new_deaths_per_million: data['new_deaths_per_million'],
        });
        newCovid.save(function (err) {
          if (err) {
            console.log(err);
          }
        });
      })
      .on('end', () => {
        console.log('Done');
      });
    });
    return 1;
  }
}
