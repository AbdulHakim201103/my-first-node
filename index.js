const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Abdul...where are you  form ?')
  })
app.post('/user',(req,res)=>{
    const user = req.body;
    user.id = user.length + 1;
    users.push(user)
    res.send(user)
})

const users = [
    {id:1, name:"Abdul Hakim Mia", email:"abdulhakim@gmail.com", mobile:"0170000000", age:"26",job:"Web Deveoloper"},
    {id:2, name:"Jabir Hossan", email:"jabir@gmail.com", mobile:"0170000000", age:"25",job:"Jobholder"},
    {id:3, name:"Milon Khan", email:"milon@gmail.com", mobile:"0170000000", age:"25",job:"Student"},
    {id:4, name:"Nur Amin", email:"amin@gmail.com", mobile:"0170000000", age:"25",job:"Student"},
    {id:5, name:"Al Hak", email:"hak@gmail.com", mobile:"0170000000", age:"26",job:"Jobholder"},
    {id:6, name:"Nur Islam", email:"islam@gmail.com", mobile:"0170000000", age:"24",job:"Army"}
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const marched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(marched)
    }
    else{

    }
  });
app.get('/fruits', (req, res) => {
    res.send(['mango','apple','banana','orange'])
  })
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('fozle aum')
  })
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id == id)
    res.send(user)
  })

  app.listen(port, () => {
    console.log('Listening to port', port);
  })
