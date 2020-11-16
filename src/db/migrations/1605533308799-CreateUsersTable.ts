import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1605533308799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {

          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'first_name',
          type: 'varchar',
        },
        {
          name: 'last_name',
          type: 'varchar',
        },
        {
          name: 'age',
          type: 'int',
        },
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
