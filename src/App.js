import logo from './logo.svg';
import './App.css';
import LoginForm from './Component/LoginForm';
import { UserContextProvider } from './Context/userContext';
import Dashboard from './Component/Dashboard';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <UserContextProvider>
        <Container>
          <Row>
            <Col>

              <LoginForm />
              <Dashboard />

            </Col>
          </Row>
        </Container>
      </UserContextProvider>
    </>
  );
}

export default App;
