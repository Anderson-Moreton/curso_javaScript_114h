// Não vamos fazes require pois o dotenbv não será usado apenas em prod
// require("dotenv").config()

//Vamos usar o mogoose e não o mongodb
//const { MongoClient } = require('mongodb');

const app = require('./src/app')
const connectDB = require("./src/db/connect")

const PORT = process.env.PORT || 3000

// Connection URL
const url = process.env.MONGO_URL;

// or as an es module:
// import { MongoClient } from 'mongodb'

//O código abaixo é a conexão como o mongodb, mas vamos usar o mongoose.

// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myFirstProject';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...
//   const insertResult = await collection.insertMany([{ task: "task1", completed: false }, { task: "task2", completed: true }]);
//     console.log('Inserted documents =>', insertResult);

//   return 'done.';
// }

// main()
//   .then(()=> {
//     app.listen(PORT)
//   })
//   .catch(console.error)
//   .finally(() => client.close());

//Mongoose
const main = async () => {
    try{
      await connectDB(url)
      app.listen(PORT)
    }catch(e){
      console.log(e)
    }
}

main()