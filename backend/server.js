const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const assignmentRoutes = require('./routes/assignments');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/assignments', assignmentRoutes);

// MongoDB connection
const db = process.env.MONGO_URI;
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
