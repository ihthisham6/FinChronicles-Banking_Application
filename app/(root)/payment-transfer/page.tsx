import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import PaymentTransferForm from '@/components/ui/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

const Transfer = async () => {

  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) {
    redirect('/sign-in');
  }

  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  if (!accounts?.data || accounts.data.length === 0) {
    return (
      <section className="payment-transfer">
        <HeaderBox 
          title="Payment Transfer"
          subtext="Please provide any specific details or notes related to the payment transfer"
        />
        <p className="text-gray-400 mt-4">No bank accounts linked yet. Connect a bank to get started.</p>
      </section>
    );
  }

  const accountsData = accounts.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="sizer-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  )
}

export default Transfer