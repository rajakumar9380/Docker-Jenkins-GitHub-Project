const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello! This app is running via Jenkins and Docker!'));
app.listen(3000, () => console.log('Server ready on port 3000'));
