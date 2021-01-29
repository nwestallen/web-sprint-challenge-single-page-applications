import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

//import components
import Home from './components/Home'
import Form from './components/Form'

const StyledHeader = styled.header`
  background-color: red;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  p, h1 {
    margin: 10px;
  }

  nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 200px;

    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
`;

const App = () => {

  const [cart,setCart] = useState([]);

  return (
    <div className='App'>
      <StyledHeader>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </nav>
      </StyledHeader>
      <Switch>
        <Route path='/pizza'>
          <Form cart={cart} setCart={setCart}/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
