import { Country } from './entities/country.entity';

export const countriesProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useValue: Country,
  },
];
