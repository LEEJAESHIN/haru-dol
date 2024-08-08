// seed.js
const { db } = require('@vercel/postgres');

async function seed() {
  try {
    const client = await db.connect();

    // 테이블 생성 쿼리
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
      );
    `);

    // 데이터 삽입 쿼리
    await client.query(`
      INSERT INTO users (name, password, content) VALUES
      ('이재신', 'wotls', 'Hello World HARU');
    `);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();
