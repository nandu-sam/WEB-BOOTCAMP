//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require('mongoose');
 
//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://localhost:27017/FruitsDB');
  }
 
//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "no name entered :("]
  },
  rating: {
    type: Number,
    min :1 ,
    max : 10
  }, 
  review: String
})
 
//create a MODEL
const Fruit = new mongoose.model ("Fruit", fruitSchema)
 
// //create a DOCUMENT
// const fruit = new Fruit ({
//  name: "Apple",
//  rating: 37,
//  review: "Great!"
// })
 
 
//save the document
// fruit.save()
 
//**CHALLENGE: Set up a people database with one document and two fields**//
//create a SCHEMA
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
 
//create a MODEL
const Person = mongoose.model('Person', personSchema);
 
//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37
});
 
//Save it
// person.save();
 
//adding to fruits model
const kiwi = new Fruit ({
  name  : "kiwi",
  rating: 7,
  review : "kiwi brate"
}); 
 
const orange = new Fruit ({
  name  : "orange",
  rating: 6,
  review : "kissljit"
});
 
const banana = new Fruit ({
  name  : "banana",
  rating: 10,
  review : "za zapek !"
}); 
 
//new way of inserting to db:
// Fruit.insertMany([kiwi, orange, banana])
//   .then(function() {
//     console.log("Successfully added to your database!");
//   })
//   .catch(function(error) {
//     console.log("Error adding fruits to the database: " + error);
//   });
 
  Fruit.find()
  .then(function(fruits) {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
 
      mongoose.connection.close();
    });
  })
  .catch(function(err) {
    console.log(err);
  });
 
 
  //updating the data
   /*Fruit.updateOne({ _id: "640cd580cf502b8c60d9740e"}, { name: "Peach" })
   .then(function(result) {
    console.log("Successfully updated the fruit.");
   })
  .catch(function(err) {
     console.log(err);
   });*/
 
 
  //delete only one 
   Fruit.deleteOne({ name: "Peach" })
   .then(function(result) {
     console.log("Successfully deleted the fruit.");
  })
   .catch(function(err) {
     console.log(err);
   });
 
 
  //delete many at once
  // Person.deleteMany({ name: "John"})
  // .then(function(result) {
  //   console.log("Successfully deleted the all people.");
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });
  