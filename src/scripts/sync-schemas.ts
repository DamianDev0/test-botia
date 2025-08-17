import { Client } from 'pg';
import { DataSource } from 'typeorm';
import { join } from 'path';
import { config } from 'dotenv';

config();

async function main() {
  const argSchemas = process.argv.slice(2);
  const envSchemas = process.env.SCHEMAS
    ? process.env.SCHEMAS.split(/[\s,]+/).filter(Boolean)
    : [];
  const schemas = argSchemas.length > 0 ? argSchemas : envSchemas;

  if (schemas.length === 0) {
    console.error('Usage: ts-node sync-schemas.ts schema1 schema2 ...');
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL no está definido en el entorno (.env).');
    process.exit(1);
  }

  const ssl = { rejectUnauthorized: false };

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl,
  });

  try {
    await client.connect();

    for (const schema of schemas) {
      console.log(`Synchronizing schema "${schema}"...`);
      await client.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);

      const entitiesGlob = join(__dirname, '..', '**', '*.entity.{ts,js}');

      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        schema,
        entities: [entitiesGlob],
        synchronize: true,
        ssl,
        extra: { ssl },
      });

      try {
        await dataSource.initialize();
        console.log(`Schema "${schema}" sincronizado.`);
      } catch (e) {
        console.error(`Error sincronizando "${schema}":`, e);
      } finally {
        await dataSource.destroy().catch(() => {});
      }
    }
  } catch (err) {
    console.error('Error general:', err);
    process.exitCode = 1;
  } finally {
    await client.end().catch(() => {});
  }
}

main().catch((err) => {
  console.error('Error no capturado:', err);
  process.exit(1);
});
