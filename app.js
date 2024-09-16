// mongoose ley node server ra mongodb server boch ko baatchit garauney kaam garxa
//ODM = Object Document Mapping = non relational databases
//ORM Object Relational Mapping = relational databases

// const express= require('express');
// const app= express();
// const userModel= require('./usermode')

// app.get("/",(req,res)=>{
// res.send("hey")
// })
// app.get("/create",async (req,res)=>{
//     let createdUser= await userModel.create({
//      name:"yubraj",
//         email:"yubraj@gmail.com",
//         username:"yubraj1"
//     })

//     res.send(createdUser);

//     console.log("hey");
//     })
    
    


// // app.listen(3000);

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// // MongoDB connection with error handling
// mongoose.connect('mongodb://127.0.0.1:27017/mongopractice', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Failed to connect to MongoDB:', err));

// // Define the user model
// const userModel = require('./usermode');

// app.get("/", (req, res) => {
//   res.send("hey");
// });

// app.get("/create", async (req, res) => {
//   let createdUser = await userModel.create({
//     name: "yubraj",
//     email: "yubraj@gmail.com",
//     username: "yubraj1"
//   });
//   res.send(createdUser);
//   console.log("User created!");
// });

// app.get('/update',async(req,res)=>{
//     // userModel.findOneUpdate(findone, update, {new:true});
//    let updateduser= await userModel.findOneAndUpdate({username:"yubraj"}, {name:"yubraj bhandari"}, {new:true});
// res.send(updateduser)

// })


// // Start the server and add error handling
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
 

// // _id="24chatacters and 12 bytes" = suruko 3 bytes= timestamp bhanxa

// // __v=


const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define the user model
const userModel = require('./usermode');

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "yubraj",
    email: "yubraj@gmail.com",
    username: "yubraj1"
  });
  res.send(createdUser);
  console.log("User created!");
});
app.get('/update', async (req, res) => {
    try {
      // Attempt to update the user and return the updated document
      let updatedUser = await userModel.findOneAndUpdate(
        { username: "yubraj" },            // Find user by username
        { name: "yubraj bhandari" },       // Update name
        { new: true }                      // Return the updated document
      );
  
      // Check if user was found and updated
      if (!updatedUser) {
        console.log("User not found");
        return res.status(404).send("User not found");
      }
  
      res.send(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      res.status(500).send("Error updating user");
    }
  });

  app.get("/read",async(req,res)=>{
    let users= await userModel.find();
    res.send(users);
    
  })
  


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
