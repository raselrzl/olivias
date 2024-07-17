"use client";
import { useState } from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import Table from './Table';
import AddItem from './AddItem';

export default function MenuItemsForm() {


    return (
        <div>
            <Header />
            <div className='flex flex-col'>
                <h1 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-200 uppercase mb-4'>
                    Admin Page
                </h1>
                <AddItem />
                <div className='mb-60'>
                    <Table />
                </div>
            </div>
            <Footer />
        </div>
    );
}
