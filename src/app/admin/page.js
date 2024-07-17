"use client";
import { useState } from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Table from './Table';
import AddItem from './AddItem';
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('../user/Login'), { ssr: false });
const Register = dynamic(() => import('../user/Register'), { ssr: false });

export default function MenuItemsForm() {
  const [view, setView] = useState('');

  const handleRegisterSuccess = () => {
    setView('login');
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col'>
        <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
          Admin Page
        </h1>
        <div className="flex items-center justify-center">
          <button
            className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-primary mx-4"
            onClick={() => setView('login')}
          >
            Login
          </button>
          <button
            className="p-2 text-sm sm:text-base md:text-lg font-semibold uppercase rounded text-white bg-primary mx-4"
            onClick={() => setView('register')}
          >
            Register
          </button>
        </div>
        <div className="flex items-center justify-center">
          {view === 'login' && <Login />}
          {view === 'register' && <Register onRegisterSuccess={handleRegisterSuccess} />}
        </div>
        <AddItem />
        <div className='mb-60'>
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
}
