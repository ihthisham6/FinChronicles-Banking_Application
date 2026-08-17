const dwolla = require('dwolla-v2');
require('dotenv').config({path: '.env'});

const dwollaClient = new dwolla.Client({
  environment: process.env.DWOLLA_ENV,
  key: process.env.DWOLLA_KEY,
  secret: process.env.DWOLLA_SECRET,
});

async function addFundingSource({
  dwollaCustomerId,
  processorToken,
  bankName,
}) {
  try {
    const dwollaAuthLinks = await dwollaClient.get(
      `${process.env.DWOLLA_BASE_URL}/customers/${dwollaCustomerId}`
    ).then((res) => res.body._links);

    const fundingSourceOptions = {
      customerId: dwollaCustomerId,
      fundingSourceName: bankName,
      plaidToken: processorToken,
      _links: dwollaAuthLinks,
    };
    
    // We can't use createFundingSource from actions because we don't have it imported, let's just make the request Dwolla needs!
    const res = await dwollaClient.post(
      `${process.env.DWOLLA_BASE_URL}/customers/${dwollaCustomerId}/funding-sources`,
      {
        name: bankName,
        plaidToken: processorToken,
      }
    );
    console.log("Success! Funding source URL:", res.headers.get("location"));
    
  } catch (err) {
    console.error("Dwolla Error:", err.body || err);
  }
}

// from previous test:
const processorToken = 'processor-sandbox-656f4d25-e5f8-4a57-b003-855c3c0ce2d1'; // Let's get a fresh one!
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
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
  const pRes = await plaidClient.sandboxPublicTokenCreate({
    institution_id: 'ins_109508', // First Platypus Bank
    initial_products: ['auth', 'transactions'],
  });
  const eRes = await plaidClient.itemPublicTokenExchange({
      public_token: pRes.data.public_token,
  });
  const aRes = await plaidClient.accountsGet({
      access_token: eRes.data.access_token,
  });
  const ptRes = await plaidClient.processorTokenCreate({
      access_token: eRes.data.access_token,
      account_id: aRes.data.accounts[0].account_id,
      processor: 'dwolla',
  });
  const processorToken = ptRes.data.processor_token;
  
  await addFundingSource({
      dwollaCustomerId: 'e61b8cba-9af2-4ead-9f1a-b51bea01a2c0',
      processorToken: processorToken,
      bankName: aRes.data.accounts[0].name
  });
}

test();
