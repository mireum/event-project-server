const { MongoClient } = require('mongodb');

const { MONGO_ID, MONGO_PASSWORD } = process.env;
// const url = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@cluster0.hqitiuj.mongodb.net/`;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connect = async () => {
    try {
      await client.connect(); 
      console.log('Connected to MongoDB!');
      await db.authenticate(MONGO_ID, MONGO_PASSWORD);

      return db;
    } catch (err) {
      console.error('mongoDB connect error', err);
    }
  };
  
  module.exports = {
    connect,
    client
  };