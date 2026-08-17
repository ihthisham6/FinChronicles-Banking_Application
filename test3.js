const { Client, Databases } = require('node-appwrite');
require('dotenv').config({path: '.env'});

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
  .setKey(process.env.NEXT_APPWRITE_KEY);

const db = new Databases(client);

async function check() {
  const bres = await db.listDocuments(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_BANK_COLLECTION_ID);
  
  const banks = bres.documents.map(b => ({id: b.$id, user: b.userId, created: b.$createdAt})).sort((a,b) => new Date(b.created) - new Date(a.created));
  console.log('Most recent banks:');
  console.log(banks.slice(0, 5));
}

check();
