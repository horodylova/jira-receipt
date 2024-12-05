import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { ReceiptForm } from './components/ReceiptForm/ReceiptForm.jsx';

function App() {
    const [boards, setBoards] = useState([])
    useEffect(() => {
        invoke('getBoards')
            .then((data) => {
                console.log('Fetched boards from resolver:', data);
                setBoards(data.values)
            })
            .catch((error) => {
                console.error('Error fetching boards from resolver:', error);
            });
    }, []);

    const handleFormSubmit = (boardName) => {
       const selectedBoard = boards.find((board) => board.name === boardName)
       if (selectedBoard) {
        console.log('Selected board:', selectedBoard);
    } else {
        console.error('Board not found:', boardName);
    }
    };

    return (
        <ReceiptForm onSubmit={handleFormSubmit} />
    );
}

export default App;

