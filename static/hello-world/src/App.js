import React from 'react';
import { invoke } from '@forge/bridge';
import { ReceiptForm } from './components/ReceiptForm/ReceiptForm.jsx';

function App() {
    const handleFormSubmit = (boardName, userName) => {
        invoke('findUserOnBoard', { boardName, userName })
            .then((user) => {
                console.log('Found user:', user);
            })
            .catch((error) => {
                console.error('Error finding user on board:', error);
            });
    };

    return (
        <ReceiptForm onSubmit={handleFormSubmit} />
    );
}

export default App;


