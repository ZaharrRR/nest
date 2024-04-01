module.exports = {
    type: 'postgres',
    host: 'dpg-cnf4785a73kc73bsahig-a.oregon-postgres.render.com',
    port: 5432,
    username: 'fallout_76db_user',
    password: 'obrKo6UvK13Fi51oAKkZnqOlqrDTqfeK',
    database: 'fallout_76db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // для разработки, в реальной среде использовать миграции
  };