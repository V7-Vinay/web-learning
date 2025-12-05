const express= require("express")
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;
const fs= require("fs");
const mongoose=require('mongoose');
const { type } = require("os");
mongoose.connect("mongodb://127.0.0.1:27017/dbb")
.then(()=>console.log('mongo connected'))
.catch(err=>console.log("mongo error",err));
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobtitle: {
    type: String,
  },
});

const user=mongoose.model("user",userSchema)

//middleware - plugin
 app.use(express.urlencoded({extended:false}));

 app.use((req,res,next)=>{
    fs.appendFile("log.txt",
        `${Date.now()}:${req.method}:${req.path}\n`,
        (err,data)=>{
            next();
        }
    );
 });
 
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.route("/api/users")
  .get((req, res) => {
   
    console.log(req.headers)
    res.setHeader("x-name","viany")//always add x-to custom header
    return res.json(users);
  })
    .delete((req, res) => {
  const { id } = req.body; // ID comes in JSON body
    const idx = users.findIndex(u => u.id === id);

    if (idx === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = users.splice(idx, 1)[0];

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ status: "failed" });
        return res.json({ status: "success", deletedUser });
    });  });

  app.patch("/api/users", (req, res) => {
    const { id, ...data } = req.body;  // extract id from body
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...data };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ status: "failed" });
        return res.json({ status: "success", updatedUser: users[userIndex] });
    });
});

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    // update the user
    users[userIndex] = {
        ...users[userIndex],
        ...body
    };

    // Save to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "failed" });
        }
        return res.json({ status: "success", updatedUser: users[userIndex] });
    });
    })


   app.post("/api/users",(req, res) => {
    const body=req.body;
    if(!body.first_name||!body.email||!body.last_name||!body.gender||!body.desgn){
        return res.status(400).json({msg:"all fields required"})
    }
    users.push({...body, id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
            return res.status(201).json({ status: "success" , id:users.length });
    });
  });

app.get("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const user=users.find((user)=>user.id===id);
    if(!user)return res.status(404).json({error:"user not found"})
return res.json(user);
});



// app.put('/api/users/:id',(req,res)=>{
//     res.json({status:"pending"});
// });

// app.patch('/api/users/:id',(req,res)=>{
//     res.json({status:"pending"});
// });

// app.delete('/api/users/:id',(req,res)=>{
//     res.json({status:"pending"});
// });


app.listen(PORT,()=>console.log(`server started at ${PORT}`));