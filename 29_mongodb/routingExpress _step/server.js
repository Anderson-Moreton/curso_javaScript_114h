require("dotenv").config()

const app = require('./src/app')

const PORT = process.env.PORT || 3000

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);

// Database Name
const dbName = 'myFirstProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...
  const insertResult = await collection.insertMany([{ task: "task1", completed: false }, { task: "task2", completed: true }]);
    console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(()=> {
    app.listen(PORT)
  })
  .catch(console.error)
  .finally(() => client.close());

app.listen(PORT)

console.log(process.env.BELUGA)