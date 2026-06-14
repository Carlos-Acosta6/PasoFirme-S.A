import express from 'express'
import dotenv from 'dotenv';
import path from 'path'
import { fileURLToPath } from 'url';

dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')))
const PORT =  process.env.PORT || 8080;



app.get('/', (req: any, res:any) =>{
    res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html'))
});

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})


