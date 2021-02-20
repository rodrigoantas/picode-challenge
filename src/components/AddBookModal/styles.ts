import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0 100px;
font-size: 24px;

label {
  color: #707070;
  margin-bottom: 10px;
}
`

export const Title = styled.form`
color:  #9466FF;
font-size: 24px;
display: flex;
align-items: center;
margin-bottom: 20px;

`

export const Input = styled.input`
margin-bottom: 20px;
border: 1px solid #9466FF;
padding: 13px 10px;
border-radius: 10px;
`

export const TextArea = styled.textarea`
margin-bottom: 20px;
border: 1px solid #9466FF;
resize: none;
padding: 5px;
border-radius: 10px;
height: 100px;


`

export const ButtonArea = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`

export const Button = styled.button`
color: white;
box-shadow: 0px 3px 6px #00000029;
background: #9466FF 0% 0% no-repeat padding-box;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 20px;
padding: 15px;
`