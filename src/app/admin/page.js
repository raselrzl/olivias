"use client";
import { useState } from 'react';
import { Footer } from '../components/Footer';
import dynamic from 'next/dynamic';
import AddItem from './AddItem';
import Table from './Table';

const Login = dynamic(() => import('../user/Login'), { ssr: false });
const Register = dynamic(() => import('../user/Register'), { ssr: false });

export default function MenuItemsForm() {
  const [view, setView] = useState('');
  const [user, setUser] = useState(null);

  const handleRegisterSuccess = () => {
    setView('login');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setView(''); // Hide login/register view
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });
      if (response.ok) {
        setUser(null); // Clear user data
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
          Admin Page
        </h1>
        <div className="flex flex-col items-center justify-center flex-grow">
          {!user ? (
            <>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-primary mx-4 active:scale-95 active:bg-primary-dark"
                  onClick={() => setView('login')}
                >
                  Login
                </button>
                <button
                  className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-primary mx-4 active:scale-95 active:bg-primary-dark"
                  onClick={() => setView('register')}
                >
                  Register
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4">
                Welcome Mr , {user.name}
              </p>
              <button
                className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-primary mx-4 active:scale-95 active:bg-primary-dark"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          {view === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
          {view === 'register' && <Register onRegisterSuccess={handleRegisterSuccess} />}
        </div>
        <div>
          {user && (
            <>
              <div>
                <AddItem />
              </div>
              <div className='mb-60'>
                <Table />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
