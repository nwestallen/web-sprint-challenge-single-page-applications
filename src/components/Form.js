//Form component
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    border: 3px solid black;
    width: 300px;
`;

const Form = props => {

    const[orderItem, setOrderItem] = useState({name:'',size:'',pepperoni:false,sausage:false,mushroom:false,greenPepper:false,onion:false,notes:''});

    const handleChange = event => {
        const { name, type, value, checked } = event.target
        if(type === 'checkbox'){
            setOrderItem({...orderItem, [name]: checked})
        } else {
            setOrderItem({...orderItem, [name]: value})
        }
    }

    return(
        <StyledForm>
            <h2>Pls order pizza</h2>
            <label>Name: 
                <input type='text' name='name' value={orderItem.name} onChange={handleChange} />
            </label>
            <label>Size:
                <select name='size' value={orderItem.size} onChange={handleChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </label>
            <div id='topping-options'>
                <p>Toppings</p>
                <label>
                    <input type='checkbox' name='pepperoni' value={orderItem.pepperoni} onChange={handleChange} />
                    Pepperoni
                </label>
                <label>
                    <input type='checkbox' name='sausage' value={orderItem.sausage} onChange={handleChange}/>
                    Sausage
                </label>
                <label>
                    <input type='checkbox' name='greenPepper' value={orderItem.greenPepper} onChange={handleChange}/>
                    Green Pepper
                </label>
                <label>
                    <input type='checkbox' name='mushroom' value={orderItem.mushroom} onChange={handleChange}/>
                    Mushroom
                </label>
                <label>
                    <input type='checkbox' name='onion' value={orderItem.onion} onChange={handleChange}/>
                    Onion
                </label>
            </div>
            <label>Special Instructions: 
                <input type='text' name='notes' value={orderItem.notes} onChange={handleChange}/>
            </label>
            <button>Add to Order</button>
        </StyledForm>
    );
};

export default Form;