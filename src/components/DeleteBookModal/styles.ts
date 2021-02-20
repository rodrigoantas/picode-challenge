import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  p {
    color: #707070;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
    color: white;
    box-shadow: 0px 3px 6px #00000029;
    background: #9466FF 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 15px;
    margin: 20px 30px;

    }
  }
  
`