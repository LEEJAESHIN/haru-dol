const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  const client = await db.connect();
  try {
    if(req.method === "GET") {
      const result = await client.query('SELECT id, name, content, created_at FROM users ORDER BY created_at ASC;');
      const users = result.rows;
      return res.status(200).json(users);
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

  try {
    if(req.method === "POST") {
      const { name, password, content } = req.body;

      const result = await client.query('INSERT INTO users (name, password, content) VALUES ($1, $2, $3)', [name, password, content]);
      return res.status(200).json(result);
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500)
  }

  try {
    if(req.method === "DELETE") {
      const { id, password } = req.body
      const dbPassword = await client.query('SELECT * FROM users WHERE id = $1;', [id]);

      if(password === dbPassword.rows[0].password) {
        const result = await client.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).json(result);
      } else {
        return res.status(401).json({ error: 'Invalid password' });
      }
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500)
  }
}