import express from "express";
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});