import mongoose from 'mongoose';
import app from './app';

const PORT = 3000;

mongoose
  .connect('mongodb://127.0.0.1:27017/testdb', {})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
