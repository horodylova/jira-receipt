import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    return (
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
    );
}

export default App;

