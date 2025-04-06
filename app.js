const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const apiroutes=require('./routes/apiroutes')

const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors({
  origin: ['https://onco-ai-frontend.vercel.app/', 'http://localhost:3000'],
}));



app.use('/api', apiroutes)



app.listen(PORT, () => {
  console.log(`🚀 Server running at PORT ${PORT}`);
});
