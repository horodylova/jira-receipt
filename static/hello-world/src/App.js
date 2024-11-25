import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { ReceiptForm } from './components/ReceiptForm/ReceiptForm.jsx';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    const handleFormSubmit = (boardName, userName) => {
        console.log(boardName, userName);
    }

    return (
        <>
        <div style={{ 
            backgroundColor: '#f0f8ff', 
            color: '#333', 
            fontFamily: 'Arial, sans-serif', 
            padding: '20px', 
            borderRadius: '10px',
            textAlign: 'center'
        }}>
            {data ? data : 'Loading...'}
        </div>
        <ReceiptForm onSubmit={handleFormSubmit}/>
        </>
    );
}

export default App;

