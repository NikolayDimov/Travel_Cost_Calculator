import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f2f5;
`;

export const Container = styled.div`
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 32px;
  margin: 20 auto
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  color: black;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  background-color: white;
  color: black;

`;

export const TotalAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: black;
`;