import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    type GoogleUser={
        name: string;
        email: string;
        picture: string;
    }
    const user = location.state?.user as GoogleUser ;
    if(user){
        console.log("User in Dashboard:", user);
    }else{
        console.log("No user data available in Dashboard");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <header className="bg-gray-900 shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-3xl font-semibold text-blue-400">Kloros</div>
                <nav className="flex items-center gap-x-12 hidden md:flex">
                    <a href="#" className="hover:text-blue-400 transition">Home</a>
                    <a href="#" className="hover:text-blue-400 transition">Create Project</a>
                    <a href="#" className="hover:text-blue-400 transition">Mint NFT</a>
                    <button className="inline-flex hover:text-blue-400 transition bg-blue-500 px-5 py-2 rounded-md">Connect Wallet</button>
                </nav>
                </div>
            </header>
            <main className="flex flex-col items-center justify-center mt-32 space-y-8">
                <p className="text-4xl font-bold">This is the dashboard page</p> 
                <button
                className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition" onClick={() => navigate("/profile", { state: { user } })}>
                    Wanna visit the Profile page?
                </button>
            </main>
            </div>

    );
}