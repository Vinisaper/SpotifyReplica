// Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD: create, read, update, delete
import express from 'express'
import cors from 'cors'
import { db } from './connect.js'

const app = express();
const PORT = 3000;

// //Middleware function to handle communication between different ports
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello World!');
})

app.get('/artist-gallery', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get('/song-gallery', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})
