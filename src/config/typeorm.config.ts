import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getTypeOrmConfig (config : ConfigService) : Promise<TypeOrmModuleOptions> {
    return {
        type: 'postgres',
        host: config.getOrThrow('POSTGRES_HOST'),
        port: config.getOrThrow('POSTGRES_PORT'),
        username: config.getOrThrow('POSTGRES_USER'),
        password: config.getOrThrow('POSTGRES_PASSWORD'),
        database: config.getOrThrow('POSTGRES_DATABASE'),
        entities: ['dist/**/*.entity.js'], // для runtime
        migrations: ['dist/migrations/*.js'],
        synchronize: false,
        logging: true,
    }
}
