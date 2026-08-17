const { Client, Users } = require('node-appwrite');
require('dotenv').config({path: '.env'});

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
  .setKey(process.env.NEXT_APPWRITE_KEY);

const users = new Users(client);

users.list().then(res => {
  const u = res.users.find(u => u.email === 'user@new.com');
  console.log('Auth ID for user@new.com:', u.$id);
}).catch(console.error);
