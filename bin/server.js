// const app = require('../app')

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`)
// })

// const mongoose = require("mongoose");
// require('dotenv').config();

// const app = require('../app')

// const {PORT = 3000, DB_HOST} = process.env;

// mongoose.connect(DB_HOST)
//   .then(()=> app.listen(PORT))
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   })
const db = require('../config/db');
const app = require('../app');

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch((err) => {
  console.log(`Server not run. Error: ${err.message}`)

})