const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencode({ extended: true }))

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

