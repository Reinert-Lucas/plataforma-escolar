import express from 'express'
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:5173'
}
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World')
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})