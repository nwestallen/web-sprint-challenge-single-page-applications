//Home page
import React from 'react'
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import Form from './Form'

const HomePage = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;

    img {
        width: 600px;
        margin: 30px;
    }
`;

const Home = (props) => {

    return(
        <HomePage>
            <h1>Order Anything You Want, As Long as It's a Pizza!</h1>
            <img alt='pizza' src='https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80' />
            <Route path='/pizza'>
                <Form/>
            </Route>
            <Link to='/pizza'>
             <button>Order Now!</button>
            </Link>
        </HomePage>
    )
};

export default Home;