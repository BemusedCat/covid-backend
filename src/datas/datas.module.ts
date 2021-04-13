import { Module } from '@nestjs/common';
import { DatasController } from './datas.controller';
import { DatasService } from './datas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatasSchema } from './schema/datas.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Data', schema: DatasSchema }])
  ],
  controllers: [DatasController],
  providers: [DatasService]
})
export class DatasModule { }