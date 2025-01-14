import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
// console.log("🚀 ~ process.env:", process.env)

if (!uri) {
  throw new Error('Por favor, configure a variável de ambiente MONGODB_URI no arquivo .env');
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
