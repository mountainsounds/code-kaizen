const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('build'));

app.listen(4000, () => {
  console.log("THe server is up and running on port 4000")
})