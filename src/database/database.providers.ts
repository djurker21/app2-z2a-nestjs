import { Sequelize } from 'sequelize-typescript';
import { Country } from '../countries/entities/country.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'example',
        database: 'nest',
      });
      sequelize.addModels([Country]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
