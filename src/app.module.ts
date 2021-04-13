import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatasModule } from './datas/datas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://abhigyan:abhigyan@cluster0.nyxlf.mongodb.net/covid', { useNewUrlParser: true }),
    DatasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}