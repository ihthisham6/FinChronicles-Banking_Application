// import HeaderBox from '@/components/ui/HeaderBox'
// import RecentTransactions from '@/components/ui/RecentTransactions';
// import RightSidebar from '@/components/ui/RightSidebar';
// import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
// import { getAccount,getAccounts } from '@/lib/actions/bank.actions';
// import { getLoggedInUser } from '@/lib/actions/user.actions';
// import React from 'react'
// //import Home from './../page';

// const Home = async({searchParams: {id,page}} :SearchParamProps)=> {
// const currentPage = Number(page as string) || 1;
//   const loggedIn = await getLoggedInUser();
//   console.log('Logged in user:', loggedIn);
//   const accounts = await getAccounts({userId: loggedIn.$id})

//   if(!accounts) return;
// const accountsData = accounts?.data;
//   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
//   const account = await getAccount({appwriteItemId});
//   return (
//     <section className='home'>
//       <div className='home-content'>
//         <header className='home-header'>
//           <HeaderBox
//           type="greeting" 
//           title="Welcome"
//           user={loggedIn?.firstName || 'Guest'}
//           subtext="Access and manage your account and transactions efficiently."
//           />

//           <TotalBalanceBox
// accounts={accountsData}
// totalBanks={accounts?.totalBanks}
// totalCurrentBalance={accounts?.totalCurrentBalance}
// />
//         </header>
//         <RecentTransactions
//         accounts={accountsData}
//         transactions={account?.transactions}
//         appwriteItemId={appwriteItemId}
//         page={currentPage}
//         />
//       </div>
//       <RightSidebar 
//       user={loggedIn}
//       transactions={account?.transactions}
//       banks={accountsData?.slice(0,2)}
//       />
//       </section>
//   )
// }

// export default Home

import HeaderBox from '@/components/ui/HeaderBox'
import RecentTransactions from '@/components/ui/RecentTransactions';
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import React from 'react'

// Export data fetching function for prefetching
export async function loadDashboardData(userId: string) {
  const [accounts] = await Promise.all([
    getAccounts({ userId }),
    // Add other data fetches here to load in parallel
  ]);

  if (!accounts) return { accounts: null, accountsData: [] };

  const accountsData = accounts?.data ?? [];
  return { accounts, accountsData };
}

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  
  // Check if user is logged in
  const loggedIn = await getLoggedInUser();
  
  // If no user session found or user data couldn't be retrieved,
  // redirect to sign-in page
  if (!loggedIn || !loggedIn.$id) {
    // Clear any stale session cookie just in case
    cookies().delete('appwrite-session');
    redirect('/sign-in');
  }

  // Use the extracted function for data loading
  const { accounts, accountsData } = await loadDashboardData(loggedIn.$id);

  if (!accounts) return null;

  // Prefer explicit id from query string; fall back to the first linked bank if present.
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  // If there is no appwriteItemId (user has no linked banks and no id query param),
  // avoid calling getAccount — return a page that shows empty state instead of crashing.
  const account = appwriteItemId ? await getAccount({ appwriteItemId }) : null;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home