const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html file
app.use(express.static(path.join(__dirname)));

// Start the server on the port provided by Elastic Beanstalk or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
