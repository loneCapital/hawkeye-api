import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketBreadthModule } from './market-breadth/market-breadth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'stocks',
      username: 'stocks',
      password: '123456',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    MarketBreadthModule,
    UsersModule,
  ],
})
export class AppModule {}
