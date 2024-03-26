import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormContent = styled.div`
  margin-bottom: 20px;
  margin: 1rem auto;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const FormButton = styled.button`
  background-color: blue;
  color: #fff;
  margin-bottom: 0.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;
