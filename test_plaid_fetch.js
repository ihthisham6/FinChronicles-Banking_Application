const { Client, Databases, Query } = require('node-appwrite');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv').config({path: '.env'});

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
  .setKey(process.env.NEXT_APPWRITE_KEY);

const db = new Databases(client);

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    }
  }
});
const plaidClient = new PlaidApi(configuration);

async function check() {
  const userId = '68eca8f50039d46143d4';
  const bres = await db.listDocuments(
    process.env.APPWRITE_DATABASE_ID, 
    process.env.APPWRITE_BANK_COLLECTION_ID,
    [Query.equal('userId', [userId])]
  );
  
  if (bres.documents.length > 0) {
    const bank = bres.documents[0];
    console.log('Testing plaid fetch for bank ID:', bank.$id, 'Token:', bank.accessToken.substring(0, 10));
    try {
      const accountsResponse = await plaidClient.accountsGet({
        access_token: bank.accessToken,
      });
      console.log('Success:', accountsResponse.data.accounts[0].name);
    } catch(err) {
      console.log('Plaid error:', err.response?.data || err.message);
    }
  }
}

check();
