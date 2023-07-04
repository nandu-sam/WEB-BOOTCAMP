// ----- 1st cmd ----- 
// (1)npm init -y 
// (2)npm i mongodb
 
// ----- 2nd cmd ----- 
// (1)mongod
 
/*const { MongoClient } = require("mongodb");
 
// Connection URL (Replace the url string with your connection string.)
// const url = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
const url = "mongodb://localhost:27017";
 
// Create a new MongoClient
const client = new MongoClient(url);
 
async function main() {
  try {
    // ----- Use connect method to connect to the server ----- 
    await client.connect();
    console.log('Connected successfully to server');
    
    // ----- Database Name ----- 
    const database = client.db('fruitsDB');
    // ----- Create a collection ----- 
    const fruitsCollection = database.collection('fruits');
 
    // ----- Insert a document (data in row) -----
    // Create an array of documents to insert
    const docs = [
        {
            name: "Apple",  
            score: 8, 
            review: "Great Fruit"},
        {   
            name: "Orange", 
            score: 6, 
            review: "Kinda Sour"},
        {
            name: "Banana", 
            score: 9, 
            review: "Great Stuff"}
       ];
     
    const insertResult = await fruitsCollection.insertMany(docs);
    console.log("Inserted " + insertResult.insertedCount + " documents into the fruitsCollection.");
    
    // ----- 3rd cmd (to check whether the data is in mongosh) -----  
    // (1)mongosh 
    // (2)show dbs 
    // (3)use <databseName>
    // (4)show collections
    // (5)db.<collectionName>.find()
    
    // ----- Find all documents -----
    const findResult = await fruitsCollection.find({}).toArray();
    console.table(findResult);
 
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
 
main().catch(console.dir);*/ //the above code you see is using node js native driver method

//the below code is using moongose 
const mongoose = require('mongoose');
 
//Connection to MongoDB database
//⁡⁢⁣⁣This line will specify the port where we will access our MongoDB Server
//⁡⁢⁣⁣Here "fruitsDB" is the name of the database where we want to connect to.⁡
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});
 
//Here we create new blueprint of our database(Schema)
//This lays foundation for every new fruit document that will be added to our DB.
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
 
const Fruit = mongoose.model("Fruit", fruitSchema);
 
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Apple keeps the doctor away"
})
 
//This save() method in Mongoose is used to save this fruit document into fruit collection inside our fruitsDB
// fruit.save();//Once a collection is saved comment fruit.save() bcoz everytime it will save same thing multiple times.
 
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});
 
const Person = mongoose.model("Person", personSchema);
 
const person = new Person({
    name: "Jhon",
    age: 37
});
 
//Guys once you save this person_collection please comment it. Otherwise it will save the same thing multiple times.
person.save();
 
 
//How to insert these many fruits at a time? (by using insertMany() method)
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The Best Fruit!"
});
 
const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "The Sour Fruit!"
});
 
const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "The Digestive Fruit!"
});
 
//In latest version of mongoose insertMany has stopped accepting callbacks
//instead they use promises(Which Angela has not taught in this course)
//So ".then" & "catch" are part of PROMISES IN JAVASCRIPT.
 
//PROMISES in brief(If something is wrong please correct me):
//In JS, programmers encountered a problem called "callback hell", where syntax of callbacks were cumbersome & often lead to more problems.
//So in effort to make it easy PROMISES were invented.
//to learn more about promise visit : https://javascript.info/promise-basics
//Or https://www.youtube.com/watch?v=novBIqZh4Bk
 
Fruit.insertMany([kiwi, orange, banana]) 
    .then(function(){
        console.log("Successfully saved all the fruits to fruitsDB");
    })
    .catch(function(err){
        console.log(err);
    });
