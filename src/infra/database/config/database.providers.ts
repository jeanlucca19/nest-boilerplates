export default {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrationsRun: false,
  migrations: [__dirname + "/../migration/**/*.ts"],
  cli: {
    migrationsDir: "src/infra/database/migration",
    entitiesDir: "src/infra/database/table-entity",
  },
};



