const express = require('express');
const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({
    user: '123'
  })
})

module.exports = app

export default {
  path: '/custom',
  handler: app
}