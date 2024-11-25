import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
`;

export const Subtitle = styled.p`
    color: #555;
    font-size: 14px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;