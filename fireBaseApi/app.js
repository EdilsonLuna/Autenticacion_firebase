import express from "express";
import api_routes from "./routes/api_routes.js"
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', api_routes)
app.use((req, res, next) => {
    console.log('Ruta no encontrada');
    res.status(404).json({ message: 'Ruta no encontrada' })
})

export default app;