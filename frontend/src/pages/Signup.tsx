import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Signup() { 
    const navigate = useNavigate();
    type GoogleUser = {
        name: string;
        email: string;
        picture: string;
    }
    const [user, setUser] = React.useState<GoogleUser | null>(null);

    return(
        <div>
            <div className='flex flex-col justify-center text-white items-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 space-y-6'>
                <p className='text-4xl font-bold'>this is the signup page</p>
                <p className='text-xl'>Sign up with Google to continue</p>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                        const decoded=jwtDecode(credentialResponse.credential) as GoogleUser;
                        setUser(decoded);
                        console.log("User logged in:", decoded);
                        navigate("/dashboard", { state: { user: decoded } });
                    } else {
                        console.log("No credential received");
                    }
                }} onError={()=>{console.log("Login Failed")}}/>
            </div>
                
        </div>
    )
}