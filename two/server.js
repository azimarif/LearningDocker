const app = require('express')();
const http = require('http');

app.get('/', (req, res)=> {
  http.get('http://one:4000',resp=> {
    let data = '';
    resp.on('data',chunk=> {
      data+=chunk
    })
    resp.on('end',()=> {
      console.log(data, 'this is the data');
      res.send(data);
    })
  }).on('error', (error)=>{
    console.log('this is error', error);
  })
})

app.listen(5000, ()=> {
  console.log('server running at '+ 5000);
})