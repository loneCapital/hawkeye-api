import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MarketBreadthModule } from './market-breadth/market-breadth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'stocks',
      username: 'stocks',
      password: '123456',
      autoLoadModels: true,
      synchronize: true,
      logging: true,
    }),
    MarketBreadthModule,
    UsersModule,
  ],
})
export class AppModule {}
