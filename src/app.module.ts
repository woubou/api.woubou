import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proprety, PropretySchema } from './schemas/proprety.schema';
import { PropretyController } from './controllers/proprety.controller';
import { PropretyService } from './services/proprety.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/zubu_v2'),
    MongooseModule.forFeature([
      { name: Proprety.name, schema: PropretySchema },
    ]),
  ],
  controllers: [AppController, PropretyController],
  providers: [AppService, PropretyService],
})
export class AppModule {}
