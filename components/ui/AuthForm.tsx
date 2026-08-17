// // // // 'use client';
// // // // import Link from 'next/link'
// // // // import Image from 'next/image'
// // // // import React,{ useState } from 'react'
// // // // import {Loader2} from 'lucide-react'
// // // // import { z } from "zod"
// // // // //zod is a form validation tool

// // // // import { zodResolver } from "@hookform/resolvers/zod"
// // // // import { useForm } from "react-hook-form"

// // // // import { Button } from "@/components/ui/button"
// // // // import {
// // // //   Form,
// // // //   FormControl,
// // // //   FormDescription,
// // // //   FormField,
// // // //   FormItem,
// // // //   FormLabel,
// // // //   FormMessage,
// // // // } from "@/components/ui/form"
// // // // import { Input } from "@/components/ui/input"
// // // // import { authFormSchema } from '@/lib/utils';
// // // // import CustomInput from './CustomInput';
// // // // import { useRouter } from 'next/navigation';
// // // // import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';
// // // // import PlaidLink from './PlaidLink';


// // // // const AuthForm = ({type}: {type:string}) => {
// // // //   const router = useRouter();
// // // //     const [user,setUser] = useState(null);
// // // //     const[isLoading,setIsLoading] = useState(false);
// // // //     //const loggedInUser = await getLoggedInUser();
// // // //     const formSchema = authFormSchema(type);

// // // //     const form = useForm<z.infer<typeof formSchema>>({
// // // //         resolver: zodResolver(formSchema),
// // // //         defaultValues: {
// // // //           email: "",
// // // //           password:''
// // // //         },
// // // //       })
     
// // // //       // 2. Define a submit handler.
// // // //       const onSubmit = async (data: z.infer<typeof formSchema>) =>{

// // // //           console.log("Form submission initiated!"); 
// // // //        setIsLoading(true);
// // // //        try{
// // // //         if(type=== 'sign-up'){
         
// // // //             const userData = {
// // // //               firstName: data.firstName!,
// // // //               lastName: data.lastName!,
// // // //               address1: data.address1!,
// // // //               city: data.city!,
// // // //               state: data.state!,
// // // //               postalCode: data.postalCode!,
// // // //               dateOfBirth: data.dateOfBirth!,
// // // //               ssn: data.ssn!,
// // // //               email: data.email,
// // // //               password: data.password
// // // //             }
// // // //   const newUser = await signUp(userData);
// // // // setUser(newUser);
// // // //           }
        
// // // //         if(type === 'sign-in'){
// // // // const response = await signIn({
// // // //   email:data.email,
// // // //   password:data.password,
// // // // })

// // // // if(response) router.push('/')
// // // //         }
// // // //         //sign up with appwrite and create plaid token
// // // //       }catch(error) {
// // // //          console.log(error);
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     }
    
// // // //   return (
// // // //     <section className="auth-form">
// // // //         <header className="flex flex-col gap-5 md:gap-8">

// // // //         <Link href="/" className="cursor-pointer flex items-center gap-1 ">
// // // //             <Image 
// // // //               src="/icons/logo.svg"
// // // //               width={34}
// // // //               height={34}
// // // //               alt="Horizon logo"
// // // //             />
// // // //             <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinChronicles</h1>
// // // //           </Link>

// // // //           <div className='flex flex-col gap-1 md:gap-3'>
// // // //             <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
// // // //                 {user
// // // //                 ? 'Link Account'
// // // //                   : type === 'sign-in'
// // // //                    ? 'Sign In'
// // // //                    : 'Sign Up'
// // // //                 }
// // // //                 <p className='text-16 font-normal text-gray-600'>
// // // //                     {
// // // //                         user
// // // //                         ? 'Link your account to get started'
// // // //                         : 'please enter your details'
// // // //                     }
// // // //                     </p>
// // // //                 </h1>
// // // //                 </div>
// // // //             </header>
// // // //             {user ? (
// // // //                 <div className="flex flex-col gap-4">
// // // // <PlaidLink user={user} variant="primary" />
// // // //                     </div>
// // // //              ):
// // // //             (
// // // //                 <>
// // // // <Form {...form}>
// // // //       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
// // // //        {type === 'sign-up' && (
// // // //         <>
// // // //         <div className="flex gap-4">
// // // //         <CustomInput control={form.control}
// // // //         name='firstName' label="First Name"
// // // //         placeholder="Enter your first name" />
// // // //           <CustomInput control={form.control}
// // // //         name='lastName' label="Last Name"
// // // //         placeholder="Enter your last name" />
// // // //         </div>
// // // //          <CustomInput control={form.control}
// // // //         name='address1' label="Address"
// // // //         placeholder="Enter your specific address" />
// // // //         <CustomInput control= {form.control}
// // // //           name="city" label="City"
// // // //           placeholder="Enter your city" />
// // // //         <div className="flex gap-4">
// // // //           <CustomInput control={form.control}
// // // //           name="state" label="State"
// // // //           placeholder="Example:NY" />
// // // //           <CustomInput control={form.control}
// // // //           name="postalCode" label="Postal Code"
// // // //           placeholder='Example: 40001' />
// // // //         </div>
// // // //         <div className="flex gap-4">
// // // //         <CustomInput control={form.control}
// // // //         name="dateOfBirth" label="Date Of Birth"
// // // //         placeholder='yyyy-mm-dd' />
// // // //         <CustomInput control={form.control}
// // // //         name="ssn" label="SSN"
// // // //         placeholder="Example: 1234" />
// // // //         </div>
// // // //         </>
// // // //        )}



// // // //       <CustomInput control={form.control}
// // // // name='email' label="Email"
// // // // placeholder="Enter your email" />
// // // // <CustomInput control={form.control}
// // // // name='password' label='Password'
// // // // placeholder='Enter your password' />
// // // // <div className="flex flex-col gap-4">
// // // //         <Button type="submit" disabled={isLoading} className='form-btn'>
// // // //           {isLoading ? (
// // // //             <>
// // // //             <Loader2 size={20} 
// // // //             className="animate-spin" /> &nbsp;
// // // //             Loading...
// // // //             </>
// // // //           ): type === 'sign-in'
// // // //            ? 'Sign In' : 'Sign Up' }
// // // //            </Button>
// // // //            </div>
// // // //       </form>
// // // //     </Form>

// // // //     <footer className="flex justify-center gap-1">
// // // //       <p className="text-14 font-normal text-gray-600">
// // // //         {type === 'sign-in'
// // // //         ? "Don't have an account?"
// // // //          : "Already have an account?" }
// // // //          </p>
// // // //          <Link href={type=== 'sign-in' ? '/sign-up' :'/sign-in' } >
// // // //          {type === 'sign-in' ? 'Sign up' : 'Sign in'}
// // // //          </Link>
         
// // // //     </footer>
// // // //                 </>
// // // //              )} 
// // // //     </section>
// // // //   )
// // // // }

// // // // export default AuthForm


// // // 'use client';

// // // import Link from 'next/link'
// // // import Image from 'next/image'
// // // import React, { useState } from 'react'
// // // import { Loader2, UserCheck } from 'lucide-react' // Import a new icon
// // // import { z } from "zod"
// // // import { zodResolver } from "@hookform/resolvers/zod"
// // // import { useForm } from "react-hook-form"
// // // import { Button } from "@/components/ui/button"
// // // import { Form } from "@/components/ui/form"
// // // import { authFormSchema } from '@/lib/utils';
// // // import CustomInput from './CustomInput';
// // // import { signIn, signUp } from '@/lib/actions/user.actions';
// // // import PlaidLink from './PlaidLink';

// // // // Define the component's props to include our new optional prop
// // // interface AuthFormProps {
// // //   type: string;
// // //   showDemoLogin?: boolean;
// // // }

// // // const AuthForm = ({ type, showDemoLogin = false }: AuthFormProps) => {
// // //   const [user, setUser] = useState(null);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const formSchema = authFormSchema(type);

// // //   const form = useForm<z.infer<typeof formSchema>>({
// // //     resolver: zodResolver(formSchema),
// // //     defaultValues: { email: "", password: '' },
// // //   })

// // //   // --- ONE-CLICK DEMO LOGIN HANDLER ---
// // //   const handleDemoLogin = async () => {
// // //     setIsLoading(true);
// // //     // Use the form's built-in setValue to populate the fields
// // //     form.setValue('email', 'user@new.com');
// // //     form.setValue('password', '12345678');

// // //     // A small delay to allow the UI to update before submitting
// // //     await new Promise(resolve => setTimeout(resolve, 100)); 
    
// // //     // Programmatically trigger the form submission
// // //     await form.handleSubmit(onSubmit)();
// // //   }

// // //   // const onSubmit = async (data: z.infer<typeof formSchema>) => {
// // //   //   setIsLoading(true);
// // //   //   try {
// // //   //     if (type === 'sign-up') {
// // //   //       const userData = {
// // //   //         firstName: data.firstName!, lastName: data.lastName!,
// // //   //         address1: data.address1!, city: data.city!,
// // //   //         state: data.state!, postalCode: data.postalCode!,
// // //   //         dateOfBirth: data.dateOfBirth!, ssn: data.ssn!,
// // //   //         email: data.email, password: data.password
// // //   //       }
// // //   //       const newUser = await signUp(userData);
// // //   //       setUser(newUser);
// // //   //     }
      
// // //   //     if (type === 'sign-in') {
// // //   //       await signIn({ email: data.email, password: data.password });
// // //   //     }
// // //   //   } catch (error) {
// // //   //     console.error("An error occurred during submission:", error);
// // //   //     // Optional: Add user-facing error feedback here
// // //   //   } finally {
// // //   //     // Don't set isLoading to false on success for sign-in, as the page will redirect
// // //   //     if (type !== 'sign-in') {
// // //   //       setIsLoading(false);
// // //   //     }
// // //   //   }
// // //   // }

// // //   // This is the final version of the onSubmit function for AuthForm.tsx

// // // const onSubmit = async (data: z.infer<typeof formSchema>) => {
// // //   setIsLoading(true);

// // //   try {
// // //     if (type === 'sign-up') {
// // //       const userData = {
// // //         firstName: data.firstName!, lastName: data.lastName!,
// // //         address1: data.address1!, city: data.city!,
// // //         state: data.state!, postalCode: data.postalCode!,
// // //         dateOfBirth: data.dateOfBirth!, ssn: data.ssn!,
// // //         email: data.email, password: data.password
// // //       };
// // //       const newUser = await signUp(userData);
// // //       setUser(newUser);
// // //       // We set loading to false here because the page doesn't redirect.
// // //       setIsLoading(false); 
// // //     }
    
// // //     if (type === 'sign-in') {
// // //       // The signIn action will automatically redirect on success.
// // //       // We do NOT set isLoading to false here, to avoid interrupting the redirect.
// // //       await signIn({
// // //         email: data.email,
// // //         password: data.password,
// // //       });
// // //     }
// // //   } catch (error) {
// // //      console.error("An error occurred during submission:", error);
// // //      // If any error occurs, we must stop the loading spinner.
// // //      setIsLoading(false);
// // //   }
// // //   // The 'finally' block is removed as its logic is now handled more precisely.
// // // }
    
// // //   return (
// // //     <section className="auth-form">
// // //       <header className="flex flex-col gap-5 md:gap-8">
// // //         <Link href="/" className="cursor-pointer flex items-center gap-1 ">
// // //           <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
// // //           <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinChronicles</h1>
// // //         </Link>
// // //         <div className='flex flex-col gap-1 md:gap-3'>
// // //           <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
// // //             {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
// // //             <p className='text-16 font-normal text-gray-600'>
// // //               {user ? 'Link your account to get started' : 'Please enter your details'}
// // //             </p>
// // //           </h1>
// // //         </div>
// // //       </header>
// // //       {user ? (
// // //         <div className="flex flex-col gap-4">
// // //           <PlaidLink user={user} variant="primary" />
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <Form {...form}>
// // //             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// // //               {/* All the sign-up and regular form fields remain the same */}
// // //               {type === 'sign-up' && (
// // //                 <>
// // //                   <div className="flex gap-4">
// // //                     <CustomInput control={form.control} name='firstName' label="First Name" placeholder="Enter your first name" />
// // //                     <CustomInput control={form.control} name='lastName' label="Last Name" placeholder="Enter your last name" />
// // //                   </div>
// // //                   <CustomInput control={form.control} name='address1' label="Address" placeholder="Enter your specific address" />
// // //                   <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" />
// // //                   <div className="flex gap-4">
// // //                     <CustomInput control={form.control} name="state" label="State" placeholder="Example:NY" />
// // //                     <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder='Example: 40001' />
// // //                   </div>
// // //                   <div className="flex gap-4">
// // //                     <CustomInput control={form.control} name="dateOfBirth" label="Date Of Birth" placeholder='YYYY-MM-DD' />
// // //                     <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Example: 1234" />
// // //                   </div>
// // //                 </>
// // //               )}
// // //               <CustomInput control={form.control} name='email' label="Email" placeholder="Enter your email" />
// // //               <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />
              
// // //               <div className="flex flex-col gap-4">
// // //                 <Button type="submit" disabled={isLoading} className='form-btn w-full'>
// // //                   {isLoading ? (<><Loader2 size={20} className="animate-spin" /> &nbsp; Loading...</>) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
// // //                 </Button>
// // //               </div>

// // //               {/* --- START: NEW ONE-CLICK DEMO LOGIN UI --- */}
// // //               {showDemoLogin && (
// // //                 <>
// // //                   <div className="relative">
// // //                     <div className="absolute inset-0 flex items-center">
// // //                       <span className="w-full border-t" />
// // //                     </div>
// // //                     <div className="relative flex justify-center text-xs uppercase">
// // //                       <span className="bg-white px-2 text-muted-foreground dark:bg-black">
// // //                         Or continue with
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                   <Button variant="secondary" className="w-full" onClick={handleDemoLogin} disabled={isLoading}>
// // //                     <UserCheck className="mr-2 h-4 w-4" />
// // //                     Demo User Login
// // //                   </Button>
// // //                 </>
// // //               )}
// // //               {/* --- END: NEW ONE-CLICK DEMO LOGIN UI --- */}

// // //             </form>
// // //           </Form>
// // //           <footer className="flex justify-center gap-1 mt-6">
// // //             <p className="text-14 font-normal text-gray-600">
// // //               {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
// // //             </p>
// // //             <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
// // //               {type === 'sign-in' ? 'Sign up' : 'Sign in'}
// // //             </Link>
// // //           </footer>
// // //         </>
// // //       )}
// // //     </section>
// // //   )
// // // }

// // // export default AuthForm


// // 'use client';

// // import Link from 'next/link'
// // import Image from 'next/image'
// // import React, { useState } from 'react'
// // import { Loader2, UserCheck } from 'lucide-react'
// // import { z } from "zod"
// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { useForm } from "react-hook-form"
// // import { Button } from "@/components/ui/button"
// // import { Form } from "@/components/ui/form"
// // import {authFormSchema  } from '@/lib/utils';
// // import CustomInput from './CustomInput';
// // import { signIn, signUp } from '@/lib/actions/user.actions';
// // import PlaidLink from './PlaidLink';

// // interface AuthFormProps {
// //   type: string;
// //   showDemoLogin?: boolean;
// // }

// // const AuthForm = ({ type, showDemoLogin = false }: AuthFormProps) => {
// //   const [user, setUser] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const formSchema = authFormSchema(type);

// //   const form = useForm<z.infer<typeof formSchema>>({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: { email: "", password: '' },
// //   })

// //   const handleDemoLogin = async () => {
// //     // Prevent multiple clicks while processing
// //     if (isLoading) return;
    
// //     setIsLoading(true);
// //     form.setValue('email', 'user@new.com');
// //     form.setValue('password', '12345678');
    
// //     // We now directly call the sign-in action.
// //     // This is cleaner and avoids potential issues with react-hook-form's handleSubmit.
// //     await onSubmit({ 
// //       email: 'user@new.com', 
// //       password: '12345678' 
// //     } as z.infer<typeof formSchema>);
// //   }

// //   const onSubmit = async (data: z.infer<typeof formSchema>) => {
// //     // This function is now the single source of truth for submission logic
// //     setIsLoading(true);

// //     try {
// //       if (type === 'sign-up') {
// //         const userData = {
// //           firstName: data.firstName!, lastName: data.lastName!,
// //           address1: data.address1!, city: data.city!,
// //           state: data.state!, postalCode: data.postalCode!,
// //           dateOfBirth: data.dateOfBirth!, ssn: data.ssn!,
// //           email: data.email, password: data.password
// //         };
// //         const newUser = await signUp(userData);
// //         setUser(newUser);
// //         // On sign-up success, we stop the loader because the page doesn't redirect.
// //         setIsLoading(false);
// //       }
      
// //       if (type === 'sign-in') {
// //         // We call signIn. If it succeeds, it will redirect, and this component
// //         // will be unmounted. Nothing further will execute.
// //         await signIn({
// //           email: data.email,
// //           password: data.password,
// //         });
// //       }
// //     } catch (error) {
// //        console.error("Submission error:", error);
// //        // If ANY error occurs (including a failed sign-in on the server),
// //        // we must stop the loader so the user can try again.
// //        setIsLoading(false);
// //     }
// //   }
    
// //   return (
// //     <section className="auth-form">
// //       <header className="flex flex-col gap-5 md:gap-8">
// //         <Link href="/" className="cursor-pointer flex items-center gap-1 ">
// //           <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
// //           <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinChronicles</h1>
// //         </Link>
// //         <div className='flex flex-col gap-1 md:gap-3'>
// //           <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
// //             {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
// //             <p className='text-16 font-normal text-gray-600'>
// //               {user ? 'Link your account to get started' : 'Please enter your details'}
// //             </p>
// //           </h1>
// //         </div>
// //       </header>
// //       {user ? (
// //         <div className="flex flex-col gap-4">
// //           <PlaidLink user={user} variant="primary" />
// //         </div>
// //       ) : (
// //         <>
// //           <Form {...form}>
// //             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
// //               {type === 'sign-up' && (
// //                 <>
// //                   {/* All sign-up fields remain here */}
// //                   <div className="flex gap-4">
// //                     <CustomInput control={form.control} name='firstName' label="First Name" placeholder="Enter your first name" />
// //                     <CustomInput control={form.control} name='lastName' label="Last Name" placeholder="Enter your last name" />
// //                   </div>
// //                   <CustomInput control={form.control} name='address1' label="Address" placeholder="Enter your specific address" />
// //                   <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" />
// //                   <div className="flex gap-4">
// //                     <CustomInput control={form.control} name="state" label="State" placeholder="Example:NY" />
// //                     <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder='Example: 40001' />
// //                   </div>
// //                   <div className="flex gap-4">
// //                     <CustomInput control={form.control} name="dateOfBirth" label="Date Of Birth" placeholder='YYYY-MM-DD' />
// //                     <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Example: 1234" />
// //                   </div>
// //                 </>
// //               )}
// //               <CustomInput control={form.control} name='email' label="Email" placeholder="Enter your email" />
// //               <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />
              
// //               <div className="flex flex-col gap-4">
// //                 <Button type="submit" disabled={isLoading} className='form-btn w-full'>
// //                   {isLoading ? (<><Loader2 size={20} className="animate-spin" /> &nbsp; Loading...</>) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
// //                 </Button>
// //               </div>

// //               {showDemoLogin && (
// //                 <>
// //                   <div className="relative">
// //                     <div className="absolute inset-0 flex items-center">
// //                       <span className="w-full border-t" />
// //                     </div>
// //                     <div className="relative flex justify-center text-xs uppercase">
// //                       <span className="bg-white px-2 text-muted-foreground dark:bg-black">
// //                         Or continue with
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <Button variant="secondary" className="w-full" onClick={handleDemoLogin} disabled={isLoading}>
// //                     <UserCheck className="mr-2 h-4 w-4" />
// //                     Demo User Login
// //                   </Button>
// //                 </>
// //               )}
// //             </form>
// //           </Form>
// //           <footer className="flex justify-center gap-1 mt-6">
// //             <p className="text-14 font-normal text-gray-600">
// //               {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
// //             </p>
// //             <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
// //               {type === 'sign-in' ? 'Sign up' : 'Sign in'}
// //             </Link>
// //           </footer>
// //         </>
// //       )}
// //     </section>
// //   )
// // }

// // export default AuthForm


// 'use client';

// import Link from 'next/link'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { Loader2, UserCheck } from 'lucide-react'
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Button } from "@/components/ui/button"
// import { Form } from "@/components/ui/form"
// import { authFormSchema } from '@/lib/utils';
// import CustomInput from './CustomInput';
// import { signIn, signUp } from '@/lib/actions/user.actions';
// import PlaidLink from './PlaidLink';

// interface AuthFormProps {
//   type: string;
//   showDemoLogin?: boolean;
// }

// const AuthForm = ({ type, showDemoLogin = false }: AuthFormProps) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const formSchema = authFormSchema(type);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: "", password: '' },
//   })

//   const handleDemoLogin = async () => {
//     if (isLoading) return;
//     await onSubmit({ 
//       // Using your correct demo credentials
//       email: 'user@new.com', 
//       password: '12345678' 
//     } as z.infer<typeof formSchema>);
//   }

//   const onSubmit = async (data: z.infer<typeof formSchema>) => {
//     setIsLoading(true);

//     try {
//       if (type === 'sign-up') {
//         const userData = {
//           firstName: data.firstName!, lastName: data.lastName!,
//           address1: data.address1!, city: data.city!,
//           state: data.state!, postalCode: data.postalCode!,
//           dateOfBirth: data.dateOfBirth!, ssn: data.ssn!,
//           email: data.email, password: data.password
//         };
//         const newUser = await signUp(userData);
//   }
    
//   return (
//     <section className="auth-form">
//       <header className="flex flex-col gap-5 md:gap-8">
//         <Link href="/" className="cursor-pointer flex items-center gap-1 ">
//           <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
//           <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinChronicles</h1>
//         </Link>
//         <div className='flex flex-col gap-1 md:gap-3'>
//           <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
//             {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
//             <p className='text-16 font-normal text-gray-600'>
//               {user ? 'Link your account to get started' : 'Please enter your details'}
//             </p>
//           </h1>
//         </div>
//       </header>
//       {user ? (
//         <div className="flex flex-col gap-4">
//           <PlaidLink user={user} variant="primary" />
//         </div>
//       ) : (
//         <>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               {type === 'sign-up' && (
//                 <>
//                   {/* All sign-up fields remain here */}
//                   <div className="flex gap-4">
//                     <CustomInput control={form.control} name='firstName' label="First Name" placeholder="Enter your first name" />
//                     <CustomInput control={form.control} name='lastName' label="Last Name" placeholder="Enter your last name" />
//                   </div>
//                   <CustomInput control={form.control} name='address1' label="Address" placeholder="Enter your specific address" />
//                   <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" />
//                   <div className="flex gap-4">
//                     <CustomInput control={form.control} name="state" label="State" placeholder="Example:NY" />
//                     <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder='Example: 40001' />
//                   </div>
//                   <div className="flex gap-4">
//                     <CustomInput control={form.control} name="dateOfBirth" label="Date Of Birth" placeholder='YYYY-MM-DD' />
//                     <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Example: 1234" />
//                   </div>
//                 </>
//               )}
//               <CustomInput control={form.control} name='email' label="Email" placeholder="Enter your email" />
//               <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />
              
//               <div className="flex flex-col gap-4">
//                 <Button type="submit" disabled={isLoading} className='form-btn w-full'>
//                   {isLoading ? (<><Loader2 size={20} className="animate-spin" /> &nbsp; Loading...</>) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
//                 </Button>
//               </div>

//               {showDemoLogin && (
//                 <>
//                   <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                       <span className="w-full border-t" />
//                     </div>
//                     <div className="relative flex justify-center text-xs uppercase">
//                       <span className="bg-white px-2 text-muted-foreground dark:bg-black">
//                         Or continue with
//                       </span>
//                     </div>
//                   </div>
//                   <Button variant="secondary" className="w-full" onClick={handleDemoLogin} disabled={isLoading}>
//                     <UserCheck className="mr-2 h-4 w-4" />
//                     Demo User Login
//                   </Button>
//                 </>
//               )}
//             </form>
//           </Form>
//           <footer className="flex justify-center gap-1 mt-6">
//             <p className="text-14 font-normal text-gray-600">
//               {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
//             </p>
//             <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
//               {type === 'sign-in' ? 'Sign up' : 'Sign in'}
//             </Link>
//           </footer>
//         </>
//       )}
//     </section>
//   )
// }

// export default AuthForm


'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { Loader2, UserCheck } from 'lucide-react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { authFormSchema } from '@/lib/utils';
import CustomInput from './CustomInput';
import { signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';
import { AuthProgress } from './AuthProgress';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  type: string;
  showDemoLogin?: boolean;
}

const AuthForm = ({ type, showDemoLogin = false }: AuthFormProps) => {
  const router = useRouter(); // Initialize the router
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: '' },
  })

  // Clear form on mount to prevent browser autocomplete/cache
  React.useEffect(() => {
    form.reset({ email: "", password: "" });
  }, [form]);

  // Pre-configured demo credentials
  const DEMO_CREDENTIALS = {
    email: 'user@new.com',
    password: '12345678'
  } as z.infer<typeof formSchema>;

  // Track login progress
  const [loginProgress, setLoginProgress] = useState(0);
  const [loginStage, setLoginStage] = useState('');

  const updateProgress = (stage: string) => {
    setLoginStage(stage);
    switch (stage) {
      case 'authenticating':
        setLoginProgress(20);
        break;
      case 'creating_session':
        setLoginProgress(40);
        break;
      case 'loading_profile':
        setLoginProgress(60);
        break;
      case 'prefetching':
        setLoginProgress(80);
        break;
      case 'redirecting':
        setLoginProgress(95);
        break;
      case 'complete':
        setLoginProgress(100);
        break;
    }
  };

  const handleDemoLogin = async () => {
    if (isLoading) return;
    
    console.time('demo-login');
    try {
      setIsLoading(true);
      updateProgress('authenticating');
      
      const responseString = await signIn(DEMO_CREDENTIALS);
      updateProgress('creating_session');
      console.timeLog('demo-login', 'server response received');
      
      const response = JSON.parse(responseString);
      if (response.success) {
        updateProgress('loading_profile');
        console.timeLog('demo-login', 'starting prefetch');
        
        // Prefetch the dashboard page
        router.prefetch('/');
        
        updateProgress('prefetching');
        // Prefetch critical UI components and data
        const prefetchPromises = [
          // Prefetch key components used on the dashboard
          import('@/components/ui/HeaderBox'),
          import('@/components/ui/TotalBalanceBox'),
          import('@/components/ui/RecentTransactions'),
          import('@/components/ui/RightSidebar'),
          
          // Prefetch any static assets or images
          fetch('/icons/logo.svg'),
        ];
        
        // Start all prefetches in parallel
        await Promise.all(prefetchPromises).catch(console.error);
        
        console.timeLog('demo-login', 'all prefetch initiated');
        
        // Update progress before navigation
        updateProgress('redirecting');
        
        // Small delay to show the final progress state
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Navigate to dashboard - by now, resources should be ready
        router.replace(response.redirect);
      } else {
        console.error("Demo login failed:", response.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Demo login error:", error);
      setIsLoading(false);
    }
    console.timeEnd('demo-login');
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!, lastName: data.lastName!,
          address1: data.address1!, city: data.city!,
          state: data.state!, postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!, ssn: data.ssn!,
          email: data.email, password: data.password
        };
        const newUser = await signUp(userData);
        setUser(newUser);
        setIsLoading(false);
      }
      
      if (type === 'sign-in') {
        updateProgress('authenticating');
      const responseString = await signIn({
        email: data.email,
        password: data.password,
      });

      const response = JSON.parse(responseString);

      if (response.success) {
        updateProgress('creating_session');
        // Use router.replace instead of window.location for faster navigation
        // The session cookie is already set by the server action
        updateProgress('prefetching');
        router.prefetch('/');
        
        // Small delay to ensure UI updates are visible
        await new Promise(resolve => setTimeout(resolve, 200));
        
        updateProgress('redirecting');
        router.replace(response.redirect);
      } else {
        console.error("Sign in failed:", response.error);
        setIsLoading(false);
        // Show error state in progress
        setLoginStage('error');
        setLoginProgress(0);
        // Reset progress after a delay
        setTimeout(() => {
          setLoginStage('');
          setLoginProgress(0);
        }, 2000);
      }
      }
    } catch (error) {
       console.error("Submission failed on client:", error);
       setIsLoading(false);
    }
  }
    
  return (
    <section className="auth-form">
      <AuthProgress 
        isLoading={isLoading}
        progress={loginProgress}
        stage={loginStage}
      />
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1 ">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinChronicles</h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            <p className='text-16 font-normal text-gray-600'>
              {user ? 'Link your account to get started' : 'Please enter your details'}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6"
              autoComplete="off"
              data-lpignore="true" // Prevent LastPass and similar password managers
              onFocus={() => form.reset(form.getValues())} // Reset form on focus to clear autofill
            >
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder="Enter your first name" />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder="Enter your last name" />
                  </div>
                  <CustomInput control={form.control} name='address1' label="Address" placeholder="Enter your specific address" />
                  <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" />
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name="state" label="State" placeholder="Example:NY" />
                    <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder='Example: 40001' />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name="dateOfBirth" label="Date Of Birth" placeholder='YYYY-MM-DD' />
                    <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Example: 1234" />
                  </div>
                </>
              )}
              <CustomInput control={form.control} name='email' label="Email" placeholder="Enter your email" />
              <CustomInput control={form.control} name='password' label='Password' placeholder='Enter your password' />
              
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className='form-btn w-full'>
                  {isLoading ? (<><Loader2 size={20} className="animate-spin" /> &nbsp; Loading...</>) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>

              {showDemoLogin && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground dark:bg-black">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full" onClick={handleDemoLogin} disabled={isLoading}>
                    <UserCheck className="mr-2 h-4 w-4" />
                    Demo User Login
                  </Button>
                </>
              )}
            </form>
          </Form>
          <footer className="flex justify-center gap-1 mt-6">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm