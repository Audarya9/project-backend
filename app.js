const express = require('express');

const app = express();

const port = process.env.PORT || 9000;

app.get('/',(req,res)=>{
    res.send('<h3>App</h3>');
});

app.use((req,res) => {
    res.send('<h1>Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
