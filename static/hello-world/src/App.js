import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { ReceiptForm } from './components/ReceiptForm/ReceiptForm.jsx';

function App() {

    useEffect(() => {
        invoke('getBoards').then((data) => {
            console.log('Fetched boards:', data);
        }).catch((error) => {
            console.error('Error fetching boards:', error);
        });
    }, []);

    const handleFormSubmit = (boardName, userName) => {
        console.log(boardName, userName);
    }

    return (
        <ReceiptForm onSubmit={handleFormSubmit}/>
    );
}

export default App;

