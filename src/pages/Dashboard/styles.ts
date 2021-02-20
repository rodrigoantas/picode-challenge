import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Content = styled.div`
width: 800px;
margin-top: 100px;
`

export const Titles = styled.div`
display: flex;
flex-direction: column;

span {
  color: #707070;
  font-size: 60px;
}
p {
  color:#A8A8B3;
  font-size: 40px;
  font-weight: 400;

}

`
export const SearchArea = styled.div`
display: flex;
margin: 50px 0;
`




export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
` 
export const Input = styled.div`
box-shadow: 0px 3px 6px #00000029;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 20px;
margin-right: 20px;
color:  #9466FF;
input {
  border: none;
  color:  #9466FF;
}

input::placeholder {
  color: #9466FF;
}

button {
  border: none;
  color: #9466FF;
}
` 
export const Checkbox = styled.div`
color: #A8A8B3;
input {
  margin-right: 10px;
}
`
export const AddButton = styled.button`
margin-left: auto;
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

export const RemoveButton = styled.button`
margin-left: auto;
border: none;
text-decoration: underline;
background: transparent;
color: #9466FF;
` 
export const CardList = styled.div``

export const Card = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 20px;
width: 100%;
margin-bottom: 25px;
padding:25px 10px;

`

export const CardHeader = styled.div`
display: flex;
`


export const CardTitle = styled.p`
color: #707070;
font-size: 25px;
font-weight: bold;
` 
export const CardSubtitle = styled.div`
display: flex;
color: #BFBFBF;
margin-bottom: 20px;
` 
export const Author = styled.p`` 
export const Pages = styled.p``

export const Description = styled.p`
color: #707070;
font-size: 24px;
margin-bottom: 23px;
`
export const Tags = styled.div`
font-size: 24px;
color: #9466FF;
span {
  margin-right: 10px;
}
`
