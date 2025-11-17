import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1762864231529 implements MigrationInterface {
    name = 'AutoMigration1762864231529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" ADD "second_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "second_name"`);
    }

}
