import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import { configDotenv } from 'dotenv';
const corsOptions = {
    origin: ["http://localhost:5173"],
}
configDotenv('./env');
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.post('/auth/login', async (req, res) => {
    const {user, pass} = req.body;
    const loginQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const [rows] = await db.query(loginQuery, [user, pass]);
    if(rows.length > 0) {
        let redir = '';
        switch (rows[0].role) {
            case 'almn':
                redir = '/dashboard/almn'
                break;
            case 'prof':
                redir = '/dashboard/prof'
                break
            default:
                redir = '/dashboard/admin'
                break;
        }
        res.send({message: 'Ok', success: true, redirTo: redir})
    } else {
        res.json({message: 'User/Pass mal', success: false, redirTo: '/dashboard/admin'})
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})