import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { DatabaseModule } from '../database/database.module';
import { countriesProviders } from './countries.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CountriesController],
  providers: [CountriesService, ...countriesProviders],
})
export class CountriesModule {}
