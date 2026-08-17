const { Client, Databases } = require('node-appwrite');
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

async function test(userId) {
  const bres = await db.listDocuments(process.env.APPWRITE_DATABASE_ID, process.env.APPWRITE_BANK_COLLECTION_ID);
  const banks = bres.documents.filter(b => b.userId === userId);
  console.log('Found banks for user:', banks.length);
  
  if (banks.length > 0) {
    const bank = banks[0];
    console.log('Testing plaid fetch for bank ID:', bank.$id, 'Token:', bank.accessToken);
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

test('685660cb001055d7ca66');
