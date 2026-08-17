const { Client, Databases } = require('node-appwrite');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv').config({path: '.env'});

// Wait, we can't import Next.js modules easily.

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

async function test() {
  // 1. Create a public token using Plaid Sandbox API
  const res = await plaidClient.sandboxPublicTokenCreate({
    institution_id: 'ins_109508', // First Platypus Bank
    initial_products: ['auth', 'transactions'],
  });
  
  const publicToken = res.data.public_token;
  console.log('Got public token:', publicToken);
  
  // Now we need to manually run exchangePublicToken logic because we can't import it easily.
  // We'll just do the itemPublicTokenExchange part to see if it fails.
  try {
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });
    
    const accessToken = exchangeResponse.data.access_token;
    const itemId = exchangeResponse.data.item_id;
    console.log('Exchange success. Access token:', accessToken.substring(0, 10));
    
    // Now get accounts
    const accountsResponse = await plaidClient.accountsGet({
      access_token: accessToken,
    });
    const accountData = accountsResponse.data.accounts[0];
    console.log('Account name:', accountData.name);
    
    // Create processor token
    const processorTokenResponse = await plaidClient.processorTokenCreate({
        access_token: accessToken,
        account_id: accountData.account_id,
        processor: 'dwolla',
    });
    const processorToken = processorTokenResponse.data.processor_token;
    console.log('Processor token:', processorToken.substring(0, 10));
    
  } catch(err) {
    console.error('Plaid logic error:', err.response?.data || err.message);
  }
}

test();
