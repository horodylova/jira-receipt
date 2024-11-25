import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Subtitle,
  Input,
  Button,
} from "./ReceiptForm.styles.js";

export const ReceiptForm = ({ onSubmit }) => {
  const [boardName, setBoardName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(boardName, userName);
  };
  return (
    <Wrapper>
      <Title>Jira Receipt</Title>
      <Subtitle>
        Generate a receipt-style summary of your Jira Board activity
      </Subtitle>
      <Subtitle>Made by Svitlana Horodylova</Subtitle>
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
    </Wrapper>
  );
};
