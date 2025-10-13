import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { logoutAccount } from '@/lib/actions/user.actions'
const Footer = ({user,type='desktop'}: FooterProps) => {
    const router = useRouter();
    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
        if(loggedOut) router.push('/sign-in')
    }
    
    return (
        <footer className={`footer ${type === 'mobile' ? 'footer-mobile' : ''}`}>
            <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                <p className="text-xl font-bold text-gray-700">
                    {user?.firstName[0]}
                </p>
            </div>

            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
                <h1 className="text-14 truncate text-gray-700 font-semibold">
                    {user?.firstName}
                </h1>
                <p className="text-14 truncate font-normal text-gray-600">
                    {user?.email}
                </p>
            </div>
            
            <button
                onClick={handleLogOut}
                className={`logout-button ${type === 'mobile' ? 'logout-button-mobile' : ''}`}
                aria-label="Logout"
            >
                <Image 
                    src="/icons/logout.svg" 
                    width={28} 
                    height={28} 
                    alt="Logout" 
                    className="transition-opacity hover:opacity-80"
                />
            </button>
        </footer>
    )
}

export default Footer