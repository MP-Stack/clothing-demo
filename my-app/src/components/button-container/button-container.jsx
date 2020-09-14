import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
background:transparent;
border:0.05rem solid lightblue;
color:white;
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem;
transition:all 0.4s ease-in-out;
&:hover{
  background:lightblue;
  color:black;
}
&:focus{
  outline:none;
}
`;