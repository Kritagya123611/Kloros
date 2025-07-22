import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = '739757973466-td0kkbs2u8ebkumd7n7esu70alcctsvc.apps.googleusercontent.com';
console.log("Loaded Google Client ID:", clientId);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
