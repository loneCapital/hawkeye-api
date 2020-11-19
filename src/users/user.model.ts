import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'ss' })
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
