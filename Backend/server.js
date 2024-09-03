const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const ItemRoutes=require('./routes/Item_Route')
const TokenRoute=require('./routes/Token_Route')

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' })); // Vite runs on port 5173 by default


// Routes
app.use('/mess/items',ItemRoutes);
app.use('/mess/tokens',TokenRoute)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//ZGgzTbGJhrHtl4FB