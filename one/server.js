const app = require('express')();

app.get('/', (req, res)=> {
  res.send('One server');
})

app.listen(4000, ()=> {
  console.log('server running at '+ 4000);
})