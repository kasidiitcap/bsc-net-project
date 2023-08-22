
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_wallet',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  if (req.method === 'POST') {
    const {address, privateKey } = req.body;

    connection.connect((error) => {
      if (error) {
        console.error('Error connecting to database:', error.message);
        return res.status(500).json({ message: 'Failed to connect to database' });
      }

      const sql =
        'INSERT INTO wallet (address, privatekey) VALUES (?, ?)';
      connection.query(
        sql,
        [address, privateKey],
        (error, results, fields) => {
          if (error) {
            console.error('Error storing data in database:', error.message);
            return res.status(500).json({ message: 'Failed to store data in database' });
          }

          // หยุดการเชื่อมต่อกับฐานข้อมูล
          connection.end();

          return res.status(200).json({ message: 'Registration successful' });
        }
      );
    });
  }
}
