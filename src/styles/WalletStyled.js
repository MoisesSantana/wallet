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

export const UserInfo = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10px;
  width: 100%;

  p {
    color: tomato;
    font-weight: 700;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.8);

    span { color: white; }
  }
`;

export const Form = styled.fieldset`
  background: tomato;
  border: none;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  position: fixed;
  top: 50px;
  width: 100%;

  label {
    color: white;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.8);
  }

  button {
    background-color: rgb(0, 38, 250);
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 3px black;
    color: white;
    cursor: pointer;
    font-weight: 700;
    padding: 0 5px;

    &:hover {
      color: tomato;
      box-shadow: none;
      text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Col = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ScrollContainer = styled.div`
  height: 50%;
  overflow: auto;
  position: relative;
  width: 100%;
`;

export const Table = styled.table`
  height: 100%;
  width: 100%;

  thead {
    background-color: rgba(255, 255, 255, 0.6);
    color: tomato;
    text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.8);
  }

  tbody {
    background-color: white;
    font-weight: 700;

    td {
      text-align: center;
    }

    button {
      background-color: red;
      border: none;
      cursor: pointer;
      height: 100%;
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;

      &:hover {
        color: white;
      }
    }
  }
`;

