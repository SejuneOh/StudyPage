import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



const Container = styled.div`
  border: 4px solid blue;
  height: 100vh;
`;

const Ul = styled.ul`
  border: 2px solid red;
  height: 120px;
  display: flex;
  align-content: center;
  

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
`;

const Main = () => {

  return (
    <Container>
      <Ul>
        <Link to="/Hook">
          <Li>./Component/Hook.tsx</Li>
        </Link>
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
          {/* <Route path='/Hook' element={ }></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
