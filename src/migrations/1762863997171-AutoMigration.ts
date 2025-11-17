import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1762863997171 implements MigrationInterface {
    name = 'AutoMigration1762863997171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "group_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d074114199e1996b57b04ac77ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teacher_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9173049f8e2a88465932a277584" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_teachers" ("group_id" uuid NOT NULL, "teacher_id" uuid NOT NULL, CONSTRAINT "PK_e72fa922ed7dca7727f3b96f35b" PRIMARY KEY ("group_id", "teacher_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1b5433f7bdacca049cc71dde7c" ON "group_teachers" ("group_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_75b63726f5f9eee6d67e659314" ON "group_teachers" ("teacher_id") `);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3" FOREIGN KEY ("group_id") REFERENCES "group_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_teachers" ADD CONSTRAINT "FK_1b5433f7bdacca049cc71dde7c1" FOREIGN KEY ("group_id") REFERENCES "group_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "group_teachers" ADD CONSTRAINT "FK_75b63726f5f9eee6d67e6593140" FOREIGN KEY ("teacher_id") REFERENCES "teacher_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "group_teachers" DROP CONSTRAINT "FK_75b63726f5f9eee6d67e6593140"`);
        await queryRunner.query(`ALTER TABLE "group_teachers" DROP CONSTRAINT "FK_1b5433f7bdacca049cc71dde7c1"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_75b63726f5f9eee6d67e659314"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1b5433f7bdacca049cc71dde7c"`);
        await queryRunner.query(`DROP TABLE "group_teachers"`);
        await queryRunner.query(`DROP TABLE "teacher_entity"`);
        await queryRunner.query(`DROP TABLE "group_entity"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}
