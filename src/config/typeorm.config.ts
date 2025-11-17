import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getTypeOrmConfig (config : ConfigService) : Promise<TypeOrmModuleOptions> {
    return {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        // host: config.getOrThrow('POSTGRES_HOST'),
        // port: config.getOrThrow('POSTGRES_PORT'),
        // username: config.getOrThrow('POSTGRES_USER'),
        // password: config.getOrThrow('POSTGRES_PASSWORD'),
        // database: config.getOrThrow('POSTGRES_DATABASE'),
        // entities: ['dist/**/*.entity.js'], // для runtime
        // migrations: ['dist/migrations/*.js'],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
    }
}
