import './App.css';
import Test from './components/test';
import Restaurant from './components/basics/restaurant';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home'
import Layout from './components/Layout'

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>      
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/test" element={<Test />} />

              </Route>
            </Routes>
          </BrowserRouter>

        {/* <Test name="Prashant"/>
        <Restaurant/>
        <Home/> */}
        

        </Col>
        </Row>
      </Container>
        
    </div>
  );
}

export default App;
