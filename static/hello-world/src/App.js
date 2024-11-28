import React, { useEffect } from 'react';
import { invoke } from '@forge/bridge';
import { ReceiptForm } from './components/ReceiptForm/ReceiptForm.jsx';

function App() {
    useEffect(() => {
        invoke('getBoards')
            .then((data) => {
                console.log('Fetched boards from resolver:', data);
            })
            .catch((error) => {
                console.error('Error fetching boards from resolver:', error);
            });
    }, []);

    const handleFormSubmit = (boardName, userName) => {
        console.log(boardName, userName);
    };

    return (
        <ReceiptForm onSubmit={handleFormSubmit} />
    );
}

export default App;

