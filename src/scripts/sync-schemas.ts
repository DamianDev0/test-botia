import { Client } from 'pg';

async function main() {
  const baseSchema = 'public';
  const schemas = process.argv.slice(2);
  if (schemas.length === 0) {
    console.error('Usage: ts-node sync-schemas.ts schema1 schema2 ...');
    process.exit(1);
  }

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  const { rows } = await client.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema = $1 AND table_type = 'BASE TABLE'`,
    [baseSchema],
  );
  const tables = rows.map((r) => r.table_name);

  for (const schema of schemas) {
    console.log(`Synchronizing schema "${schema}"`);
    await client.query(`CREATE SCHEMA IF NOT EXISTS "${schema}"`);
    for (const table of tables) {
      await client.query(
        `CREATE TABLE IF NOT EXISTS "${schema}"."${table}" (LIKE "${baseSchema}"."${table}" INCLUDING ALL)`,
      );
    }
  }

  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
