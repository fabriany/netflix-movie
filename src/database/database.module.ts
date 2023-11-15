import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { appConfig } from '../config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigType<typeof appConfig>) => {
        const { uri, user, pass, dbName } = configService.mongoConnection;
        return { uri, user, pass, dbName };
      },
      inject: [appConfig.KEY],
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
