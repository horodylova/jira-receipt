import React, { useState } from 'react';
import { Wrapper, FormContainer, Title, Subtitle, Input, Button } from './ReceiptForm.styles';

export const ReceiptForm = ({ onSubmit }) => {
    const [boardName, setBoardName] = useState('');
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(boardName, userName);
        setBoardName('');
        setUserName('');
    };

    return (
        <Wrapper>
            <FormContainer>
                <Title>Jira Receipt</Title>
                <Subtitle>Generate a receipt-style summary of your Jira Board activity</Subtitle>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        value={boardName}
                        onChange={(e) => setBoardName(e.target.value)}
                        placeholder="Enter board name"
                        required
                    />
                    <Input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter user name"
                        required
                    />
                    <Button type="submit">Generate</Button>
                </form>
            </FormContainer>
        </Wrapper>
    );
};

