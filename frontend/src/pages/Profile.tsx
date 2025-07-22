import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Profile(){
    const navigate = useNavigate();
    type GoogleUser = {
        name: string;
        email: string;
        picture: string;
    }
    const location = useLocation();
    const user = location.state?.user as GoogleUser;
    if(user){
        console.log("User in Dashboard:", user);
    }else{
        console.log("No user data available in Dashboard");
    }
    return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
        <div className="bg-gray-950 p-10 rounded-2xl shadow-xl max-w-sm w-full flex flex-col items-center space-y-6">
            <h1 className="text-3xl font-bold text-blue-400">Your Profile</h1>
        
            <img src={user?.picture} alt="Profile" className="rounded-full w-32 h-32"/>
            <div className="text-center space-y-2">
                <p className="text-xl font-semibold">Welcome, {user?.name}</p>
                <p className="text-sm text-gray-300">Name: {user?.name}</p>
                <p className="text-sm text-gray-300">Email: {user?.email}</p>
            </div>
        </div>
    </div>
    );

}