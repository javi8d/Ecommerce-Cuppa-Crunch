import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Example route
app.get('/', (req, res) => {
  res.send("Hello from the backend!");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
