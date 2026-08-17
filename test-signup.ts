import { signUp } from './lib/actions/user.actions';

async function test() {
  try {
    const res = await signUp({
      firstName: 'Test',
      lastName: 'User',
      address1: '123 Test St',
      city: 'Test City',
      state: 'NY',
      postalCode: '10001',
      dateOfBirth: '1990-01-01',
      ssn: '1234',
      email: `test${Date.now()}@example.com`,
      password: 'password123'
    });
    console.log('Success:', res);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
