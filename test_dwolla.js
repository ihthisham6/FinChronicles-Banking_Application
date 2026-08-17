const dwolla = require('dwolla-v2');
require('dotenv').config({path: '.env'});

const dwollaClient = new dwolla.Client({
  environment: process.env.DWOLLA_ENV,
  key: process.env.DWOLLA_KEY,
  secret: process.env.DWOLLA_SECRET,
});

async function test() {
  const res = await dwollaClient.get('customers');
  if (res.body.total > 0) {
    const customer = res.body._embedded.customers[0];
    const customerUrl = customer._links.self.href;
    console.log('Customer URL:', customerUrl);
    
    // We can't actually add a funding source without a valid Plaid processor token
    // But we can check if Dwolla complains about the customer state!
    console.log('Customer status:', customer.status);
  }
}
test();
