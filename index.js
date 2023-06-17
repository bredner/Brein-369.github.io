const express = require('express');
const path = require('path');

const app = express();
const port = 4200;

// Serve static files from the __dirname directory
app.use(express.static(__dirname));

app.get('/git-demo', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} || laurensius-ftlive-brank-as.solutions.staging.apix.global` || 'laurensius-ftlive-brank-as-1411.solutions.apixplatform.com');
});
