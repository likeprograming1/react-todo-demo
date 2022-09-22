import styled from 'styled-components'

const StyleMain = styled.div`
width: 400px;
height: 300px;
border: 1px red solid;
`
const StyleInput = styled.input`
width: 250px;
height: 40px;
`

export const Login = () => {
  return (
    <StyleMain>
      ID:&nbsp;<StyleInput placeholder='아이디'/>
    </StyleMain>
  )
}