import HeaderBox from '@/components/ui/HeaderBox'
import { Pagination } from '@/components/ui/Pagination';
import TransactionsTable from '@/components/ui/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import { redirect } from 'next/navigation';
import React from 'react'

const TransactionHistory = async ({ searchParams: { id, page }}:SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  
  if (!loggedIn) {
    redirect('/sign-in');
  }
  
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  if (!accounts?.data || accounts.data.length === 0) {
    return (
      <div className="transactions">
        <div className="transactions-header">
          <HeaderBox 
            title="Transaction History"
            subtext="See your bank details and transactions."
          />
        </div>
        <p className="text-gray-400">No bank accounts linked yet. Connect a bank to get started.</p>
      </div>
    );
  }
  
  const accountsData = accounts.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  if (!appwriteItemId) {
    return (
      <div className="transactions">
        <div className="transactions-header">
          <HeaderBox 
            title="Transaction History"
            subtext="See your bank details and transactions."
          />
        </div>
        <p className="text-gray-400">Unable to load account data.</p>
      </div>
    );
  }

  const account = await getAccount({ appwriteItemId })

  if (!account) {
    return (
      <div className="transactions">
        <div className="transactions-header">
          <HeaderBox 
            title="Transaction History"
            subtext="See your bank details and transactions."
          />
        </div>
        <p className="text-gray-400">Unable to load account data.</p>
      </div>
    );
  }

  const rowsPerPage = 10;
  const totalPages = account?.transactions?.length ? Math.ceil(account.transactions.length / rowsPerPage) : 0;

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account?.transactions?.slice(
    indexOfFirstTransaction, indexOfLastTransaction
  ) || [];

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account?.data?.name}</h2>
            <p className="text-14 text-blue-25">
              {account?.data?.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account?.data?.mask}
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(account?.data?.currentBalance)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable 
            transactions={currentTransactions}
          />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={currentPage} />
              </div>
            )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory