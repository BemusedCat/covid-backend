import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  Query,
  NotFoundException,
  Delete,
  Param,
} from '@nestjs/common';
import { DatasService } from './datas.service';

@Controller('data')
export class DatasController {
  constructor(private dataService: DatasService) {}

  // Retrieve
  @Get('datas')
  async getAllData(@Res() res,@Query() querr) {
   
    const datas = await this.dataService.getAllData(querr);
    return res.status(HttpStatus.OK).json(datas);
  }

  @Get('chart')
  async getChartData(@Res() res) {
    const datas = await this.dataService.getChartData();
    return res.status(HttpStatus.OK).json(datas);
  }

  @Put('update')
  async updateAllData(@Res() res) {
    const data = await this.dataService.updateAllData();
    return res.status(HttpStatus.OK).json({
      message: 'Updated All data',
    });
  }
}
