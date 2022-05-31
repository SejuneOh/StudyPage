import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HookSample from './Components/HookSample.tsx';
import ContextSample from './Components/ContextSample.tsx';
import LoginSample from './Components/LoginSample.tsx'
import Register from './Components/Register.tsx'
import Signup from './Components/Signup.tsx'




// styled components
const Container = styled.div`
  // border: 4px solid blue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Ul = styled.ul`
  // border: 2px solid red;
  height: 120px;
  display: flex;
  align-content: center;
  // overflow : scroll;
  overflow-y : hidden;
  margin: 20px
  // flex-wrap : wrap
  

`;

const Li = styled.li`
  // border: 2px solid red;
  line-height: 120px;
  hight: 10px;
  list-style-type: none;
  margin-left: 40px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

// styled Link in react-router-dom
// parameter 처럼 컴포넌트를 받아 스타일링 할 수 있다.
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Main = () => {

  return (
    <Container>
      <Ul>
        <StyledLink to="/HookSample">
          <Li>../HookSample.tsx</Li>
        </StyledLink>
        <StyledLink to="/ContextSample">
          <Li>../ContextSample.tsx</Li>
        </StyledLink>
        <StyledLink to="/LoginSample">
          <Li>../LoginSample.tsx</Li>
        </StyledLink>
      </Ul>
    </Container>
  )
}


// main page li styled
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/HookSample' element={<HookSample />}></Route>
          <Route path='/ContextSample' element={<ContextSample />}></Route>
          <Route path='/LoginSample' element={<LoginSample />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
