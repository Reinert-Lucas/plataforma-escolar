import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv';
const corsOptions = {
    origin: ["http://localhost:5173"],
}
configDotenv('./env');

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.post('/auth/login', (req, res) => {
    const {user, pass} = req.body;
    if(user === 'a' && pass === '123') {
        res.json({message: 'Ok', success: true, redirTo: '/dashboard/user'})
    } else {
        res.json({message: 'User/Pass mal', success: false, redirTo: '/dashboard/admin'})
    }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})