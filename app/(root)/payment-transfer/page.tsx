import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import PaymentTransferForm from '@/components/ui/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Transfer = async () => {

  const loggedIn = await getLoggedInUser();
const accounts = await getAccounts({
userId: loggedIn.$id
})
if (!accounts) return;
const accountsData = accounts?.data;
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