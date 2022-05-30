import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'


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
  margin-left: 50px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
 `;


// main page li styled
function App() {
  return (
    <>
      <Container>
        <Ul>
          <Li>test</Li>
          <Li>test</Li>
          <Li>test</Li>
        </Ul>
        <Ul></Ul>
        <Ul></Ul>
      </Container>
    </>
  );
}

export default App;
