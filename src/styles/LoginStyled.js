import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: auto;
  width: 85%;
`;

export const Form = styled.fieldset`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 3px black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 85px;
  text-align: center;

  legend {
    color: tomato;
    font-size: 1.5rem;
    font-weight: 900;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.8);
  }

  label {
    color: white;
    font-weight: 700;
    text-shadow: 1px 1px 3px black;
  }

  input {
    border: none;
    border-radius: 3px;
    height: 30px;
    text-align: center;
    width: 150%;

    &::placeholder { text-align: center; }
  }

  a { width: 200%; }

  button {
    border: none;
    background-color: rgba(200, 200, 200, 0.5);
    &:enabled {
      background-color: tomato;
      border: none;
      box-shadow: 1px 1px 3px black;
      color: white;
      cursor: pointer;
      font-weight: 700;
      height: 50px;
      width: 100%;
    }
  }
`;