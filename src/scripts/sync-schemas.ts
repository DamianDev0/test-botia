import { Client } from 'pg';
import { DataSource } from 'typeorm';
import { join } from 'path';

async function main() {
  const argSchemas = process.argv.slice(2);
  const envSchemas = process.env.SCHEMAS
    ? process.env.SCHEMAS.split(/[\s,]+/).filter(Boolean)
    : [];
  const schemas = argSchemas.length > 0 ? argSchemas : envSchemas;

  if (schemas.length === 0) {
    console.error('Usage: ts-node sync-schemas.ts schema1 schema2 ...');
    console.error('   or set SCHEMAS="schema1,schema2" npm run sync:schemas');
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  for (const schema of schemas) {
    console.log(`Synchronizing schema "${schema}"`);
    await client.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);

    const dataSource = new DataSource({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      schema,
      entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
      synchronize: true,
    });

    await dataSource.initialize();
    await dataSource.destroy();
  }

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

