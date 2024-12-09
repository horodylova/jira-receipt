import React, {useEffect} from 'react';
import { invoke } from '@forge/bridge';
import ReceiptForm from './components/ReceiptForm/ReceiptForm.jsx';

function App() {
    useEffect(() => {
        invoke('getBoards') 
            .then((data) => {
                console.log('Fetched all boards from resolver:', data); 
            })
            .catch((error) => {
                console.error('Error fetching boards from resolver:', error);
            });
    }, []); 

    const handleFormSubmit = (boardName ) => {
        console.log(boardName );
    };

    return (
        <div>
            <h1>Find Board</h1>
            <ReceiptForm onSubmit={handleFormSubmit} />
        </div>
    );
}

export default App;



