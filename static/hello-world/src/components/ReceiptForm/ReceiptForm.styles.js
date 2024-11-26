import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f4f8;
    padding: 20px;
    box-sizing: border-box;
`;

export const FormContainer = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
`;

export const Subtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

export const Button = styled.button`
    width: 100%;
    background-color: #007bff;
    color: #ffffff;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;
