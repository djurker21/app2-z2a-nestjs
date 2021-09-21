import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Country extends Model {
  @Column
  name: string;

  @Column
  code: string;

  @Column
  flag: string;
}
