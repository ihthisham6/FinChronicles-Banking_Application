// // // import React from 'react'
// // // import AuthForm from '@/components/ui/AuthForm'
// // // const SignIn = () => {
// // //   return (
// // //     <section className='flex-center size-full max-sm:px-6'>
// // //       <AuthForm type="sign-in"/>
// // //       </section>
// // //   )
// // // }

// // // export default SignIn


// // import React from 'react'
// // import AuthForm from '@/components/ui/AuthForm'

// // const SignIn = () => {
// //   return (
// //     <section className='flex-center size-full max-sm:px-6'>
      
// //       {/* =================================================================== */}
// //       {/* START: ADDED SECTION FOR RECRUITER DEMO                           */}
// //       {/* This box will display the demo credentials above the login form.  */}
// //       {/* =================================================================== */}
// //       <div className="w-full max-w-[520px] p-4 bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800 rounded-lg text-center mb-6">
// //           <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">For Recruiter Review</h3>
// //           <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Use the credentials below to explore the application:</p>
// //           <div className="mt-2 text-sm">
// //               <p><strong className="font-semibold">Email:</strong> user@new.com</p>
// //               <p><strong className="font-semibold">Password:</strong> 12345678</p>
// //           </div>
// //       </div>
// //       {/* =================================================================== */}
// //       {/* END: ADDED SECTION FOR RECRUITER DEMO                             */}
// //       {/* =================================================================== */}

// //       <AuthForm type="sign-in"/>

// //     </section>
// //   )
// // }

// // export default SignIn

// 'use client'; // This is required to use hooks like useState

// import React, { useState } from 'react';
// import AuthForm from '@/components/ui/AuthForm';
// import { Copy } from 'lucide-react'; // We'll use a copy icon

// const SignIn = () => {
//   // State to manage the "Copied!" feedback text
//   const [copied, setCopied] = useState('');

//   const handleCopy = (text: string, type: 'email' | 'password') => {
//     navigator.clipboard.writeText(text);
//     setCopied(type);
//     setTimeout(() => setCopied(''), 2000); // Reset after 2 seconds
//   };

//   const demoEmail = 'demo@example.com';
//   const demoPassword = 'DemoPassword123!';

//   return (
//     <section className='flex-center size-full flex-col max-sm:px-6'>
      
//       {/* --- START: INTERACTIVE DEMO BOX --- */}
//       <div className="w-full max-w-[420px] p-5 mb-8 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Demo Account</h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//             Click to copy credentials and explore the app.
//           </p>
//           <div className="mt-4 text-left bg-white dark:bg-gray-900 p-3 rounded-md border border-gray-300 dark:border-gray-600 space-y-2">
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-mono text-gray-700 dark:text-gray-300 truncate">
//                   {demoEmail}
//                 </span>
//                 <button onClick={() => handleCopy(demoEmail, 'email')} className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//                   {copied === 'email' ? <span className="text-xs text-green-500">Copied!</span> : <Copy size={14} className="text-gray-500" />}
//                 </button>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
//                   {demoPassword}
//                 </span>
//                 <button onClick={() => handleCopy(demoPassword, 'password')} className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//                   {copied === 'password' ? <span className="text-xs text-green-500">Copied!</span> : <Copy size={14} className="text-gray-500" />}
//                 </button>
//               </div>
//           </div>
//       </div>
//       {/* --- END: INTERACTIVE DEMO BOX --- */}

//       <AuthForm type="sign-in"/>

//     </section>
//   )
// }

// export default SignIn


import React from 'react'
import AuthForm from '@/components/ui/AuthForm'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      {/* 
        This is now clean and centered. We pass a prop to tell the AuthForm 
        to render its special demo login button for this page only.
      */}
      <AuthForm type="sign-in" showDemoLogin={true} />
    </section>
  )
}

export default SignIn