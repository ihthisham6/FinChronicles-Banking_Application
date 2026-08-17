const { Client, Databases, Query } = require('node-appwrite');
require('dotenv').config({path: '.env'});

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
  .setKey(process.env.NEXT_APPWRITE_KEY);

const db = new Databases(client);

async function check() {
  const userId = '68eca8f50039d46143d4'; // the $id of the user document for user@new.com
  console.log('Querying for userId:', userId);
  const bres = await db.listDocuments(
    process.env.APPWRITE_DATABASE_ID, 
    process.env.APPWRITE_BANK_COLLECTION_ID,
    [Query.equal('userId', [userId])]
  );
  
  console.log('Result length:', bres.documents.length);
  if (bres.documents.length > 0) {
    console.log(bres.documents[0].$id);
  }
}

check();
